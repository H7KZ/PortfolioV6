---
date: '2024-12-25'
order: 8
title: Disenchantment
thumbnail: /images/projects/disenchantment/thumbnail.webp
tags:
    - Personal
    - Minecraft Mechanics
    - Java
---

<img src="/images/projects/disenchantment/anvil.webp" alt={title} class="w-full h-56 object-cover mb-4 rounded-lg shadow-lg" />

<div class="bg-neutral-900 flex flex-wrap gap-y-8 gap-x-20 justify-between px-8 py-6 rounded-lg xs:px-24">
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Project</h3>
        <p class="!m-0">{title}</p>
    </div>
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Client</h3>
        <p class="!m-0">Personal</p>
    </div>
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Category</h3>
        <p class="!m-0">Minecraft Plugin</p>
    </div>
</div>

<br />
<br />
<br />

# Project details

Disenchantment is a **Java-based** Minecraft plugin built with the **Spigot API**, designed to enhance the vanilla
gameplay experience by reimagining how anvils function. The plugin introduces a new mechanic that allows players to
remove and recover enchantments from items, offering more control and flexibility in item management and enchantment
strategy.

The project was developed with a strong focus on **compatibility**, **maintainability**, and **player experience**.
Supporting **versions from 1.18 through 1.21.5**, Disenchantment integrates seamlessly into any Minecraft server setup
without requiring additional dependencies. It features intuitive player interactions, permission-based controls, and
detailed in-game feedback, making it a lightweight yet powerful addition to gameplay.

Development involved crafting custom event listeners, command handlers, and inventory GUIs using the Spigot API. Great
care was taken to ensure that the plugin follows best **practices for performance and thread safety**, including
asynchronous processing for tasks such as item validation and enchantment data handling. The project is fully open
source and actively maintained, with a clear codebase and community feedback loop via GitHub and SpigotMC.

<br />
<br />
<br />

# Features & Contributions

**Enhanced Gameplay Mechanics**: Redesigned the anvil system to allow removal and recovery of item enchantments,
promoting deeper player engagement and strategy.

**Multi-Version Support**: Ensured plugin compatibility across Minecraft versions 1.18 - 1.21.5, enabling wide adoption
in both legacy and current servers.

**Clean and Maintainable Codebase**: Developed in **Java** with the **Spigot API** using modular architecture and clean
design patterns for easy extensibility and updates.

**Custom GUI & Command System**: Implemented user-friendly inventory interfaces and commands for smooth in-game
interaction and configuration.

**Open Source & Community Driven**: Hosted on **GitHub** with thorough documentation and active issue tracking,
encouraging community contributions and transparency.

<br />
<br />
<br />

# Technologies & Tools

**Java**, Spigot API, Minecraft 1.18–1.21.5, **IntelliJ IDEA**, **Git**, GitHub, YAML, **Maven**, Minecraft NMS
