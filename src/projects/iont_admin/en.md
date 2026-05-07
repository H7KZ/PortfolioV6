---
date: '2024-08-25'
order: 6
title: IONT admin
thumbnail: /images/projects/iont_admin/thumbnail.webp
tags:
    - Work
    - Local Admin Panel
    - Fullstack
lede: 'An offline-first admin panel running directly on Raspberry Pi hardware — giving on-site technicians a secure interface to configure, monitor, and update EV chargers.'
client: 'IONT Tech s.r.o.'
role: 'Frontend Engineer'
timeline: '2023'
sector: 'Clean Energy · SaaS'
impact:
    - label: 'Deployment'
      value: 'Embedded'
      sub: 'Raspberry Pi'
    - label: 'Updates'
      value: 'Signed'
      sub: 'Auto-update system'
    - label: 'Type'
      value: 'Offline-first'
      sub: 'No cloud dependency'
contributions:
    - num: '01'
      title: 'Embedded Admin Interface'
      body: 'Built a secure, offline-first admin panel using Svelte compiled to static HTML, ensuring full compatibility with the low-power ARM architecture of the Raspberry Pi.'
    - num: '02'
      title: 'Backend API Layer'
      body: 'Developed a Fastify server bridging the frontend with C++ firmware-level logic, handling charger control, configuration, and real-time monitoring.'
    - num: '03'
      title: 'Secure Auto-Update System'
      body: 'Implemented an automatic software update mechanism with signature verification and code obfuscation to prevent tampering and ensure consistency across all deployed units.'
    - num: '04'
      title: 'Automated System Setup'
      body: 'Wrote Bash scripts to fully automate provisioning, networking, environment configuration, and runtime initialization on new Raspberry Pi devices.'
stack:
    - 'Svelte'
    - 'TailwindCSS'
    - 'Fastify'
    - 'Node.js'
    - 'Bash'
    - 'Raspberry Pi'
    - 'Linux'
    - 'REST API'
gallery:
    - /images/projects/iont_admin/thumbnail.webp
---

IONT Admin is a locally hosted admin panel designed to run directly on Raspberry Pi hardware embedded in EV charging units, giving on-site administrators a clean interface for configuration, diagnostics, and monitoring. The challenge was building a performant, secure application for a constrained ARM environment while maintaining tight integration with C++ firmware through a Fastify API layer. A custom signed auto-update system was built to manage deployments across the fleet without manual intervention.
