---
date: '2026-04-26'
title: Building a real-time departure board with Rust, a Pi Zero 2, and an OLED — from scratch.
author: Jan Komínek
thumbnail: /images/posts/pi_zero_departure_board/thumbnail.webp
description: How I built a wall-mounted transit departure board using Rust on a Raspberry Pi Zero 2 WH — covering the headless OS provisioning, AP/STA WiFi concurrency, cross-compilation, and async GPIO with Tokio.
readingTime: 12
tags:
    - EN
    - Rust
    - Raspberry Pi
    - Embedded
    - Linux
---

# Building a real-time departure board with Rust, a Pi Zero 2, and an OLED — from scratch.

My apartment is near a busy tram stop. I kept missing departures because I'd check my phone, see "3 minutes," take my
time putting on shoes, and arrive to watch the tram pull away. I wanted a small wall-mounted display that showed the
next few departures at a glance — always on when I walk past, off when the room is empty.

The result: a Raspberry Pi Zero 2 WH driving a 128×64 OLED over I2C, written in Rust, with a PIR sensor for automatic
sleep and a hardware button for manual wake. Here's how it was built and what I learned doing it.

---

## The hardware

- **Raspberry Pi Zero 2 WH** — the "WH" variant has GPIO headers pre-soldered and built-in WiFi. At ~15€ it's the right
  size for this project.
- **SH1106 128×64 OLED** (I2C) — simple to wire (SDA/SCL + power), low power draw on dark pixels, readable from across a
  room.
- **HC-SR501 PIR motion sensor** — triggers display wake on movement.
- **Tactile button** — manual wake override, active-low wiring.
- **Status LED** — shows boot/active state.

Wiring is straightforward: OLED on I2C bus (SDA → GPIO 2, SCL → GPIO 3), PIR on GPIO 17, button on GPIO 27, LED on GPIO 22.

---

## The first problem: getting a headless Pi onto WiFi

Before writing a single line of Rust, I needed a reproducible way to provision the Pi. Headless ARM setup — no monitor,
no keyboard — has one nasty failure mode: if your home WiFi credentials are wrong, or the network is temporarily down,
you have no way to SSH in to fix it. You need physical access or a serial cable.

My solution: make the Pi serve its own WiFi hotspot as a fallback whenever it can't reach the home network.

### AP/STA concurrency on the CYW43438

The Pi Zero 2 uses a CYW43438 wireless chip — one physical radio that the Linux kernel can multiplex into two virtual
interfaces:

```
Physical radio (CYW43438)
├── wlan0   [managed/STA]  ← NetworkManager keeps home WiFi
└── uap0    [AP]           ← fallback hotspot, created on demand
```

The catch: one radio means both interfaces must share the same 2.4 GHz channel. You can't pick independently — when the
hotspot starts, it has to detect what channel `wlan0` is currently on and match it.

### The regulatory domain race condition

This is the part that burned me for an afternoon.

My first attempt put `country_code=CZ` in the `hostapd.conf`. The daemon would start, print "Could not connect to kernel
driver," and exit. No obvious reason.

What's actually happening: when `hostapd` sees `country_code=`, it tells the WiFi driver to update its regulatory
domain. The driver briefly takes the interface **down** during the `COUNTRY_UPDATE` state transition. `hostapd` tries to
initialize beacons during that window — the interface is down — and fails.

The fix is to set the regulatory domain on `wlan0` **before** creating the `uap0` virtual interface, give it three
seconds to settle, then start `hostapd` with no `country_code` line at all:

```bash
# Set regulatory domain on the existing STA interface first
iw reg set CZ
sleep 3

# Now create the AP virtual interface
iw dev wlan0 interface add uap0 type __ap

# Detect wlan0's active channel and patch hostapd config to match
CHANNEL=$(iw dev wlan0 info | awk '/channel/ {print $2}')
sed -i "s/^channel=.*/channel=$CHANNEL/" /etc/pizero/hostapd.conf
```

Three seconds feels arbitrary, but it's the driver settle time. Less than that and you race. There's no kernel event to
wait on — this is just how it is with this chip.

### Virtual interface cleanup

The other footgun: `ip link del uap0` does **not** fully remove the virtual interface from the driver's perspective. The
next time you try `iw dev wlan0 interface add uap0 type __ap`, you get `EBUSY`. You need:

```bash
iw dev uap0 del   # not: ip link del uap0
```

This matters because the watchdog tears down and recreates the hotspot on a 30-second loop, probing whether home WiFi
has returned. Getting this wrong means the hotspot can only be started once per boot.

### The watchdog state machine

The provisioning system runs a watchdog as a systemd service (`Restart=always`). Three phases:

1. **Boot phase** (configurable timeout, default 60s): wait for NetworkManager to associate. Every 5 seconds, check for
   IP address **and** gateway reachability via ping — IP alone isn't enough, NM assigns addresses during association or
   on captive portals.
2. **Normal mode**: check WiFi health every 45 seconds. Fail → Phase 3.
3. **Hotspot mode**: tear down hotspot, give NM 15 seconds to reconnect. Success → back to Normal. Five consecutive
   failures → reboot.

The watchdog script deliberately has no `set -euo pipefail`. Any transient error is logged and the loop continues — a
watchdog that exits on a curl timeout is useless. Systemd handles genuine crashes with `Restart=always`.

---

## The application: Rust on ARM64

With the Pi reliably networked, I wrote the display application in Rust. The goals were: responsive to motion input,
minimal memory footprint, compile-time configuration so there's nothing to configure at runtime.

### Cross-compilation

The Pi Zero 2 runs aarch64 (ARM64 Cortex-A53). My dev machine is x86_64. Cross-compiling Rust to ARM64 is easy with
`cross`:

```bash
# Install once
cargo install cross

# Build for Pi Zero 2 (ARM64)
cross build --release --target aarch64-unknown-linux-gnu

# Deploy
scp target/aarch64-unknown-linux-gnu/release/zero-departure-board pi@raspberrypi.local:~/
```

The `Makefile` wraps this into `make ship` — build and deploy in one command.

The release profile is tuned for size, since the Pi has 512 MB RAM but I still want a lean binary:

```toml
[profile.release]
opt-level = 'z'     # minimize binary size
lto = true
codegen-units = 1
strip = true
```

### Compile-time configuration

I didn't want to deal with parsing config files at runtime on constrained hardware. The backend URL, GPIO pin numbers,
timeout values, and station name are all embedded into the binary at compile time via a `build.rs` script:

```rust
// build.rs — reads .env, emits cargo:rustc-env for each key
fn main() {
    let env = std::fs::read_to_string(".env").unwrap_or_default();
    for line in env.lines() {
        if let Some((k, v)) = line.split_once('=') {
            println!("cargo:rustc-env={}={}", k.trim(), v.trim());
        }
    }
    println!("cargo:rerun-if-changed=.env");
}
```

```rust
// config.rs — zero-cost constants, evaluated at compile time
pub const BACKEND_URL: &str = env!("BACKEND_URL");
pub const PIR_GPIO_PIN: u8 = /* parsed from env!(...) */;
pub const IDLE_TIMEOUT_SECS: u64 = 60;
pub const POLL_INTERVAL_SECS: u64 = 15;
```

Changing the backend URL requires a recompile and redeploy — that's the right tradeoff for a single-device project. No
config parsing, no file I/O at startup, no "missing config" class of bugs.

### The display constraint: 21 characters per line

The SH1106 is 128 pixels wide. With `embedded_graphics` at FONT_6X10, that's exactly **21 characters per line** — 6
pixels × 21 = 126 pixels, leaving 2 pixels of margin.

Every formatting decision flows from this constraint. The departure board shows up to 4 lines:

```
Bořislavka        12:47   ← header: station name + clock
  22   Nádraží Holešovice  3m ← line number, destination, minutes
  17   Budějovická        12m
   1   Nemocnice Motol    18m
  22   Nádraží Holešovice 31m
```

Time formatting rules (fits within the column budget):

- `≤0 min` → `NOW` (right-aligned)
- `1–99 min` → `Xm` (right-aligned)
- `≥100 min` → `>99m`

The formatting module is pure functions with no state — easy to unit test without hardware:

```rust
#[test]
fn test_format_minutes() {
    assert_eq!(format_minutes(0), "NOW");
    assert_eq!(format_minutes(1), " 1m");
    assert_eq!(format_minutes(99), "99m");
    assert_eq!(format_minutes(100), ">99m");
}
```

### Async GPIO with Tokio

The main loop manages three concurrent concerns: polling the motion sensor at 100 ms, refreshing the API every 15
seconds, and rendering the display. Tokio handles this without threads:

```rust
#[tokio::main]
async fn main() {
    let mut state = State::Idle;

    loop {
        match state {
            State::Idle => {
                // Poll PIR at 100ms — responsive to motion
                if motion::detected() || button::pressed() {
                    display::wake();
                    departures = api::fetch().await;
                    state = State::Active(Instant::now());
                }
            }
            State::Active(since) => {
                if since.elapsed() > IDLE_TIMEOUT {
                    display::sleep();
                    state = State::Idle;
                    continue;
                }
                // Refresh API every POLL_INTERVAL_SECS
                if last_fetch.elapsed() > POLL_INTERVAL {
                    departures = api::fetch().await;
                    last_fetch = Instant::now();
                }
                board::render(&departures);
            }
        }
        sleep(Duration::from_millis(100)).await;
    }
}
```

The `display::sleep()` call blanks the screen — on OLEDs, dark pixels draw no current, so this is real power saving, not
just a software flag.

### GPIO button debouncing

The button is wired active-low (pressed = GPIO low). Rather than time-based debouncing, I use edge detection: track the
previous state, only register a press on HIGH→LOW transition.

```rust
pub struct Button {
    pin: InputPin,
    last: Level,
}

impl Button {
    pub fn pressed(&mut self) -> bool {
        let current = self.pin.read();
        let edge = self.last == High && current == Low;
        self.last = current;
        edge
    }
}
```

This approach has zero latency and no sleep — it plays nicely with the 100 ms polling loop.

---

## The result

The board has been running continuously for several months. Power draw in idle (display off) is low enough that it runs
from a standard 5V USB phone charger with no thermal issues. The AP/STA watchdog has recovered from two instances of the
home router rebooting without any manual intervention.

The things I'd change with hindsight:

**e-paper instead of OLED.** The SH1106 is readable in dim light but washes out in direct sunlight. An e-paper display (
Waveshare 2.13") would be visible in any light and consume near-zero power between refreshes. The tradeoff is ~1 second
refresh latency, which is fine for departure data that updates every 15 seconds.

**Rust `embassy` instead of Tokio.** For a future version I'd use [`embassy`](https://embassy.dev/) — a proper async
embedded framework designed for bare-metal and single-board computers. It handles the event loop without a full async
runtime and integrates better with `rppal`'s hardware interrupts, which would let me wake on PIR signal rather than
polling every 100 ms.

**Separate backend.** The departure API is a thin wrapper around the Prague public transport API (PID). If I were doing
this again I'd run a small Rust or Node service on the Pi itself with a caching layer, so the display doesn't depend on
an external server at all.

Both repos are open source if you want to adapt them for your own stop:

- **[ZeroDepartureBoard](https://github.com/H7KZ/ZeroDepartureBoard)** — the Rust display application
- **[PiZero2Installation](https://github.com/H7KZ/PiZero2Installation)** — the headless Pi provisioning scripts
