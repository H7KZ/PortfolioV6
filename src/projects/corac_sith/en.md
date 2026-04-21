---
date: '2025-11-19'
order: 1
title: SITH GUI (DeepTrace)
thumbnail: /images/projects/corac_sith/thumbnail.webp
tags:
    - Work
    - Data Visualization
    - Frontend
---

<img src="/images/projects/corac_sith/hashchain.webp" alt={title} class="w-full h-56 object-cover mb-4 rounded-lg shadow-lg" />

<div class="bg-neutral-900 flex flex-wrap gap-y-8 gap-x-20 justify-between px-8 py-6 rounded-lg xs:px-24">
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Project</h3>
        <p class="!m-0">{title}</p>
    </div>
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Client</h3>
        <p class="!m-0">CORAC Engineering</p>
    </div>
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Category</h3>
        <p class="!m-0">Frontend</p>
    </div>
</div>

<br />
<br />
<br />

# Project Details

SITH GUI (marketed as **DeepTrace**) is a specialized **web application** developed for CORAC Engineering to ensure the
**provenance and integrity of Earth Observation (EO) data**. The application serves as a crucial interface for data
providers and consumers, allowing them to verify the lineage and authenticity of data without ever needing to transfer
the sensitive files themselves.

The project is built on a modern **Vue.js** stack with a strong emphasis on security and visualization. It integrates
client-side authentication via **AWS User Pools (Cognito) and OAuth**, ensuring that access control is managed securely.
A core component of the application is the interactive visualization of data lineage using **D3.js**, which provides
users with a clear, graphical representation of how data has been processed and moved through the supply chain.

Development focused on **performance and reliability**, utilizing **Shadcn** for a consistent UI/UX and strictly
verifying file integrity using cryptographic hashes. The system allows for the management of trusted data sources and
enables verification against a blockchain-like hash-chain directly within the user's browser, adhering to a "zero-trust"
architecture where verification happens on the client side.

<br />
<br />
<br />

# Features & Benefits

**Interactive Lineage Visualization**: Utilizes **D3.js** to render complex graphs showing the history (lineage) of data
files. Users can visually trace the origin of a file and its subsequent processing steps via the "Query Trace" service.

**Client-Side Integrity Verification**: Implements a robust **Hash-chain** verification system where the browser
independently verifies the integrity of data blocks against trusted records, ensuring data hasn't been tampered with.

**Trusted Supply-Chain Management**: Provides an administrative interface for configuring and whitelisting trusted data
sources (providers and processors), which allows the system to automatically evaluate the trustworthiness of incoming
data.

**Secure Authentication**: Integrated with **AWS User Pools** and OAuth for secure, client-side only authentication,
protecting access to sensitive lineage data while maintaining a seamless user experience.

**Modern Tech Stack**: Built with **Vue.js**, **Vite**, and **pnpm** for high performance, and **Shadcn UI** for a
professional, responsive design. The codebase enforces strict quality standards through automated linting and
formatting.

<br />
<br />
<br />

# Technologies & Tools

**Vue.js**, **D3.js**, **Node.js** (v22+), **AWS Cognito** (OAuth), **Shadcn UI**, **pnpm**, Vite, REST API Integration,
Cryptography (Hashing)
