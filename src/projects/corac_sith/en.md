---
date: '2025-11-19'
order: 2
title: SITH DeepTrace
thumbnail: /images/projects/corac_sith/thumbnail.webp
tags:
    - Work
    - Data Visualization
    - Frontend
lede: "A zero-trust data provenance platform for Earth Observation data — verifying file lineage and integrity entirely in the user's browser, without ever transferring the sensitive files themselves."
client: 'CORAC Engineering'
role: 'Senior Frontend Engineer'
timeline: 'Apr 2025 — ongoing'
sector: 'GovTech · Aerospace'
impact:
    - label: 'Trust model'
      value: 'Zero'
      sub: 'Hash-chain verification'
    - label: 'Auth'
      value: 'OAuth'
      sub: 'AWS Cognito pools'
contributions:
    - num: '01'
      title: 'Lineage visualization in D3.js'
      body: 'Interactive force-directed graph of provenance. Each node is a processing step; edges are hash-verified transforms. Supports 1000+ nodes with zoom, pan, and query-based highlighting.'
    - num: '02'
      title: 'Client-side hash-chain verifier'
      body: 'Pure-browser cryptographic integrity check. Walks the chain from leaf to root, validates each SHA-256 hash against a trusted anchor, flags any tampered link with precise diagnostics.'
    - num: '03'
      title: 'Zero-trust auth with Cognito'
      body: 'AWS Cognito OAuth flow — access tokens never hit our server. Scoped permissions for data providers vs. consumers, with session-level hash-chain verification gating sensitive operations.'
    - num: '04'
      title: 'Vue 3 + Vite + Shadcn stack'
      body: 'Set up the project from scratch. Strict TypeScript, automated linting, pnpm workspaces, CI with preview deploys. Established patterns the rest of the team adopted.'
stack:
    - 'Vue 3'
    - 'TypeScript'
    - 'D3.js'
    - 'Vite'
    - 'pnpm'
    - 'Shadcn UI'
    - 'AWS Cognito'
    - 'OAuth'
    - 'REST API'
    - 'SubtleCrypto'
    - 'Node.js v22+'
gallery:
    - /images/projects/corac_sith/thumbnail.webp
    - /images/projects/corac_sith/hashchain.webp
---

Earth Observation data is **sensitive and massive**. Providers and consumers need to verify that a file's lineage is intact — that nothing has been tampered with between collection, processing, and delivery — but the files themselves often can't move across networks.

DeepTrace solves this by doing the verification **client-side**: the browser fetches a cryptographic hash chain, reconstructs the lineage graph, and validates each step against trusted sources — without the operator ever holding the raw data.
