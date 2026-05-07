---
date: '2024-08-25'
order: 6
title: IONT admin
thumbnail: /images/projects/iont_admin/thumbnail.webp
tags:
    - Pracovní
    - Lokální Admin Panel
    - Fullstack
lede: 'Offline-first administrační panel běžící přímo na hardwaru Raspberry Pi — dává technikům na místě bezpečné rozhraní pro konfiguraci, monitoring a aktualizace nabíječek EV.'
client: 'IONT Tech s.r.o.'
role: 'Frontend Engineer'
timeline: '2023'
sector: 'Clean Energy · SaaS'
impact:
    - label: 'Nasazení'
      value: 'Embedded'
      sub: 'Raspberry Pi'
    - label: 'Aktualizace'
      value: 'Podepsané'
      sub: 'Auto-update systém'
    - label: 'Typ'
      value: 'Offline-first'
      sub: 'Bez závislosti na cloudu'
contributions:
    - num: '01'
      title: 'Vestavěné admin rozhraní'
      body: 'Bezpečný offline-first admin panel postavený pomocí Svelte kompilovaného do statického HTML pro plnou kompatibilitu s nízkoenergetickou ARM architekturou Raspberry Pi.'
    - num: '02'
      title: 'Backend API vrstva'
      body: 'Vývoj Fastify serveru propojujícího frontend s firmwarem v C++, zajišťujícího ovládání nabíječky, konfiguraci a monitoring v reálném čase.'
    - num: '03'
      title: 'Bezpečný auto-update systém'
      body: 'Implementace mechanismu automatických aktualizací softwaru s ověřováním podpisů a obfuskací kódu pro ochranu před neoprávněnými zásahy a konzistentnost nasazení.'
    - num: '04'
      title: 'Automatizované nastavení systému'
      body: 'Bash skripty pro kompletní automatizaci provisioningu, síťového nastavení, konfigurace prostředí a inicializace na nových zařízeních Raspberry Pi.'
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

IONT Admin je lokálně hostovaný administrační panel navržený pro provoz přímo na hardwaru Raspberry Pi zabudovaném v nabíjecích jednotkách EV, který dává správcům na místě přehledné rozhraní pro konfiguraci, diagnostiku a monitoring. Výzvou bylo vytvořit výkonnou a bezpečnou aplikaci pro omezené ARM prostředí při zachování těsné integrace s firmwarem v C++ přes Fastify API vrstvu. Byl vyvinut vlastní podepsaný auto-update systém pro správu nasazení napříč celou flotilou bez nutnosti manuálního zásahu.
