---
date: '2025-11-19'
order: 2
title: SITH DeepTrace
thumbnail: /images/projects/corac_sith/thumbnail.webp
tags:
    - Pracovní
    - Vizualizace dat
    - Frontend
lede: 'Platforma pro ověřování původu a integrity dat o pozorování Země s nulovou důvěrou — ověřuje provenienci souborů přímo v prohlížeči uživatele, aniž by byly citlivé soubory kdy přeneseny.'
client: 'CORAC Engineering'
role: 'Senior Frontend Engineer'
timeline: 'Dub 2025 — probíhá'
sector: 'GovTech · Kosmický průmysl'
impact:
    - label: 'Model důvěryhodnosti'
      value: 'Zero'
      sub: 'Hash-chain verification'
    - label: 'Autentizace'
      value: 'OAuth'
      sub: 'AWS Cognito pools'
contributions:
    - num: '01'
      title: 'Lineage visualization in D3.js'
      body: 'Interaktivní force-directed graf proveniencí. Každý uzel představuje krok zpracování; hrany jsou transformace ověřené hashem. Podporuje 1000+ uzlů se zoomem, posouváním a zvýrazňováním na základě dotazů.'
    - num: '02'
      title: 'Client-side hash-chain verifier'
      body: 'Kryptografická kontrola integrity čistě v prohlížeči. Prochází řetězec od listu ke kořeni, ověřuje každý SHA-256 hash vůči důvěryhodnému ukotvení a označuje jakýkoliv pozměněný článek s přesnými diagnostikami.'
    - num: '03'
      title: 'Zero-trust auth with Cognito'
      body: 'AWS Cognito OAuth flow — přístupové tokeny nikdy nedorazí na náš server. Rozsahem vymezená oprávnění pro poskytovatele vs. konzumenty dat, s ověřováním hash-chainu na úrovni relace chránícím citlivé operace.'
    - num: '04'
      title: 'Vue 3 + Vite + Shadcn stack'
      body: 'Projekt nastaven od základu. Striktní TypeScript, automatizovaný linting, pnpm workspaces, CI s náhledovými nasazeními. Zavedené vzory, které přijal zbytek týmu.'
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

Data o pozorování Země jsou **citlivá a objemná**. Poskytovatelé a příjemci potřebují ověřit, že je provenience souboru v pořádku — že s ním nebylo manipulováno mezi sběrem, zpracováním a doručením — ale samotné soubory often nemohou procházet sítěmi.

DeepTrace řeší tento problém ověřováním přímo v **prohlížeči**: prohlížeč stáhne kryptografický hash-chain, rekonstruuje graf proveniencí a ověří každý krok oproti důvěryhodným zdrojům — aniž by operátor kdy držel surová data.
