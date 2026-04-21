---
date: '2025-11-18'
order: 2
title: Scorecard
thumbnail: /images/projects/corac_scorecard/thumbnail.webp
tags:
    - Work
    - Reporting Tool
    - Frontend
---

<img src="/images/projects/corac_scorecard/main.webp" alt={title} class="w-full h-56 object-cover mb-4 rounded-lg shadow-lg" />

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

Scorecard is a **web application** developed for CORAC Engineering, built on the **Vue.js** framework, serving as an
advanced tool for managing and generating security reports. The application functions as an interactive spreadsheet
designed specifically for the needs of cyber auditors, enabling them to efficiently input risk analysis data and export
it into formats for end clients.

The project was developed with a focus on **data portability, user-friendliness, and output customization**. A key
functionality is the ability to export processed data into **PDF reports** that are fully configurable (including client
logo insertion, company name, and other metadata). The application also supports saving and loading state using **JSON
format**, facilitating backups and work transfer between different devices without the need for a server database.

Development was carried out using a modern frontend stack. To ensure code consistency and quality, strict **linters and
formatters** were implemented. The user interface utilizes the **Shadcn** component set, ensuring a clean design and
intuitive control. The build process and dependency management are optimized using tools like **pnpm** and **Vite**,
guaranteeing high performance in both development and production environments.

<br />
<br />
<br />

# Features & Benefits

**Professional Reporting**: Automated data export to **PDF** with "white-label" customization options (custom logos,
headers), streamlining the delivery of security audit results to clients.

**Data Management & Portability**: The ability to export and import complete tables in **JSON** format. This enables
easy backups, sharing of works-in-progress among colleagues, or transferring work to other devices.

**Modern UI/UX**: Utilization of **Shadcn** components and **Vue.js** reactivity provides auditors with a clear and fast
interface for working with large amounts of data without unnecessary cognitive load.

**Development Standardization**: The project employs a robust toolset for **code quality** (linting, formatting) and a
fast package management system (**pnpm**), ensuring easy maintainability and future scalability of the application.

**Compliance Support**: The tool is designed to structurally support processes related to risk analysis (e.g., for
the \*
\*NIS2\*\* directive), thereby reducing the administrative burden on auditors.

<br />
<br />
<br />

# Technologies & Tools

**Vue.js**, **Node.js** (v22+), **Shadcn UI**, **pnpm**, npm, Vite, **JSON**, PDF Generation, ESLint, Prettier
