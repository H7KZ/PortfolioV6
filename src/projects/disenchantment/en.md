---
date: '2024-12-25'
order: 5
title: Disenchantment
thumbnail: /images/projects/disenchantment/thumbnail.webp
tags:
    - Personal
    - Minecraft Mechanics
    - Java
lede: 'A Minecraft plugin that reimagines the anvil — letting players remove and recover enchantments from items for deeper inventory strategy across versions 1.18 to 26.x.'
client: 'Personal Project'
role: 'Solo Developer'
timeline: '2020'
sector: 'Gaming · Minecraft Plugin'
impact:
    - label: 'Versions'
      value: '1.18–26.x'
      sub: 'Multi-version'
    - label: 'Source'
      value: 'Open source'
      sub: 'GitHub'
    - label: 'Dependencies'
      value: 'Zero'
      sub: 'Drop-in plugin'
contributions:
    - num: '01'
      title: 'Enhanced Anvil Mechanics'
      body: 'Redesigned the vanilla anvil system to support enchantment removal and recovery, giving players fine-grained control over item management and enchantment strategy.'
    - num: '02'
      title: 'Multi-Version Compatibility'
      body: 'Ensured seamless compatibility across Minecraft 1.18 through 26.x with no additional dependencies, enabling wide adoption on both legacy and current servers.'
    - num: '03'
      title: 'Custom GUI & Command System'
      body: 'Implemented user-friendly inventory interfaces and in-game commands with permission-based controls and detailed player feedback for smooth interaction.'
    - num: '04'
      title: 'Performance & Thread Safety'
      body: 'Applied best practices for thread safety and performance including asynchronous processing for item validation and enchantment data handling within the Spigot event system.'
stack:
    - 'Java'
    - 'Spigot API'
    - 'Maven'
    - 'IntelliJ IDEA'
    - 'Git'
    - 'YAML'
gallery:
    - /images/projects/disenchantment/thumbnail.webp
    - /images/projects/disenchantment/anvil.webp
---

Disenchantment is a Java-based Minecraft plugin built with the Spigot API that solves a longstanding vanilla limitation: once you apply an enchantment, it's permanent. The plugin introduces a new mechanic allowing players to remove and recover enchantments from items via a redesigned anvil interaction, adding real strategic depth to item management. Built with a focus on compatibility and performance, it runs across Minecraft versions 1.18–26.x with zero dependencies and is open source on GitHub.
