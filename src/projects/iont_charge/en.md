---
date: '2024-07-25'
order: 3
title: IONT charge
thumbnail: /images/projects/iont_charge/thumbnail.webp
tags:
    - Work
    - Online Payment Charging
    - Fullstack
lede: 'A web-based payment gateway for public EV charging stations — connecting drivers, payment infrastructure, and physical charger hardware in one secure system.'
client: 'IONT Tech s.r.o.'
role: 'Fullstack Engineer'
timeline: '2024'
sector: 'Clean Energy · Payments'
impact:
    - label: 'Architecture'
      value: 'Microservices'
      sub: 'Docker Swarm'
    - label: 'Payment'
      value: 'ČSOB'
      sub: 'Certified gateway'
    - label: 'Type'
      value: 'Production'
      sub: 'Public EV network'
contributions:
    - num: '01'
      title: 'Payment Gateway Integration'
      body: "Integrated ČSOB's secure online payment system to handle sensitive transaction data with full compliance and security standards for public EV charging."
    - num: '02'
      title: 'Fullstack Platform'
      body: 'Engineered the system end-to-end using SvelteKit on the frontend and Fastify with TypeScript on the backend, backed by MongoDB and a clean REST API layer.'
    - num: '03'
      title: 'Firmware API Collaboration'
      body: 'Coordinated directly with the firmware team to connect the backend with the EV charger master server API, enabling real-time hardware communication and control.'
    - num: '04'
      title: 'Infrastructure & DevOps'
      body: 'Managed Docker Swarm deployments, configured Linux servers, and implemented CI/CD pipelines for automated, production-ready delivery.'
stack:
    - 'SvelteKit'
    - 'TailwindCSS'
    - 'Fastify'
    - 'TypeScript'
    - 'MongoDB'
    - 'Docker Swarm'
    - 'Linux'
    - 'CI/CD'
    - 'REST API'
gallery:
    - /images/projects/iont_charge/thumbnail.webp
---

IONT Charge is a modern web-based payment gateway built for public EV charging stations, enabling seamless online transactions between drivers and IONT's charging infrastructure. The core challenge was integrating a certified bank payment gateway with real-time communication to physical charger hardware — requiring tight collaboration with both the firmware team and financial compliance requirements. The system was built on a microservices architecture deployed via Docker Swarm, making it scalable and production-ready for public use.
