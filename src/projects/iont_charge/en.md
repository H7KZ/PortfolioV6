---
date: '2024-07-25'
order: 3
title: IONT charge
thumbnail: /images/projects/iont_charge/thumbnail.webp
tags:
    - Work
    - Online Payment Charging
    - Fullstack
---

<img src="/images/projects/iont_charge/thumbnail.webp" alt={title} class="w-full h-80 object-cover mb-4 rounded-lg" />

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

IONT Charge is a modern web-based payment gateway for electric vehicle (EV) charging stations, enabling seamless online
transactions for public EV chargers. The system connects drivers with charging infrastructure through a secure and
intuitive interface, while handling real-time communication between the frontend, backend services, and the physical
charger units.

Built using a **microservices architecture** and deployed with **Docker Swarm**, the backend was developed in \*
\*TypeScript with Fastify**, featuring a robust **REST API** layer. It integrates with the **ČSOB payment gateway**,
ensuring secure and compliant handling of financial transactions. The user-facing frontend, crafted in **SvelteKit and
TailwindCSS\*\*, delivers a clean and responsive experience across devices.

A critical aspect of the project involved deep integration with a **master server API** provided by the firmware team,
enabling precise interaction with EV chargers. I worked closely with the firmware engineers to align backend behavior
with the low-level hardware communication protocols. Security best practices were applied throughout the stack, given
the system's financial and real-time control nature.

The infrastructure was enhanced with **CI/CD pipelines**, **Linux server orchestration**, and containerized deployments,
resulting in a scalable and production-ready solution for public EV charging management.

<br />
<br />
<br />

# Features & Contributions

**Payment Gateway Integration**: Integrated **ČSOB’s secure online payment system**, handling sensitive payment data
with strict compliance and security standards.

**Developed Fullstack Platform**: Engineered the system using **SvelteKit**, **Fastify (TypeScript)**, and **MongoDB**,
delivering a seamless UI and robust API layer.

**Infrastructure & DevOps**: Managed **Docker Swarm-based deployments**, configured **Linux servers**, and implemented
automated delivery pipelines using **CI/CD** tools.

**Firmware API Collaboration**: Coordinated with the firmware development team to connect the backend with the **EV
charger master server API**, enabling real-time hardware communication.

**Secure System Design**: Emphasized security and scalability across the stack, from **RESTful API design** to end-user
payment processing.

<br />
<br />
<br />

# Technologies & Tools

**SvelteKit**, TailwindCSS, HTML, **Fastify (TypeScript)**, REST API, **MongoDB**, Docker Swarm, Linux, **CI/CD**,
Bitbucket, Jira, **Git**, Bash, **ČSOB payment integration**
