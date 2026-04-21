---
date: '2024-08-25'
order: 4
title: IONT admin
thumbnail: /images/projects/iont_admin/thumbnail.webp
tags:
    - Work
    - Local Admin Panel
    - Fullstack
---

<img src="/images/projects/iont_admin/thumbnail.webp" alt={title} class="w-full h-80 object-cover mb-4 rounded-lg" />

<div class="bg-neutral-900 flex flex-wrap gap-y-8 gap-x-20 justify-between px-8 py-6 rounded-lg xs:px-24">
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Project</h3>
        <p class="!m-0">{title}</p>
    </div>
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Client</h3>
        <p class="!m-0">IONT tech s.r.o.</p>
    </div>
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Category</h3>
        <p class="!m-0">Fullstack Application</p>
    </div>
</div>

<br />
<br />
<br />

# Project details

IONT Admin is a lightweight, locally hosted admin panel designed to configure and manage EV chargers directly on-site.
Built specifically for **Raspberry Pi-based hardware**, it provides a clean interface for administrators and end-users
to interact with charger settings, monitor activity, and perform diagnostics. The system was crafted with performance,
security, and maintainability in mind.

The frontend is developed using **Svelte**, compiled to static HTML to ensure compatibility with low-power ARM
architectures. It communicates with a **Fastify-based backend API** that exposes charger control endpoints and interacts
with **low-level firmware** written in C++. I also built secure Bash scripts to automate the full environment setup and
system initialization on Raspberry Pi devices.

A significant aspect of the project was the creation of a **custom update system** that automatically manages secure
software updates, including signature verification and obfuscation techniques to prevent tampering. The update mechanism
was deeply integrated into the charger firmware infrastructure to guarantee consistency and reliability across updates.

This project demanded a strong focus on **system-level security**, **hardware-aware development**, and **tight
integration with the firmware team** to ensure stable operation under constrained environments.

<br />
<br />
<br />

# Features & Contributions

**Built Embedded Admin Interface**: Designed and developed a secure, offline-first admin panel using **Svelte** compiled
to **HTML** for optimal Raspberry Pi compatibility.

**Developed Backend API Layer**: Created a **Fastify** server that bridges the frontend with firmware-level logic,
handling charger control, configuration, and monitoring.

**Automated System Setup**: Wrote **Bash scripts** to fully automate system provisioning, networking, environment setup,
and runtime initialization.

**Secure Update Mechanism**: Implemented an **auto-update system** for the EV charger software with built-in **security
checks**, **code obfuscation**, and **signature verification**.

**Firmware Collaboration**: Closely collaborated with the C++ firmware team to ensure robust API bindings between the
backend and hardware-level services.

<br />
<br />
<br />

# Technologies & Tools

**Svelte**, HTML, **TailwindCSS**, **Fastify**, **Node.js**, Bash, **Raspberry Pi**, REST API, Linux, Obfuscation,
Auto-Update System, Secure Bootstrapping, Git, Bitbucket, Jira
