---
date: '2024-08-25'
order: 4
title: IONT admin
thumbnail: /images/projects/iont_admin/thumbnail.webp
tags:
    - Pracovní
    - Lokální Admin Panel
    - Fullstack
---

<img src="/images/projects/iont_admin/thumbnail.webp" alt={title} class="w-full h-80 object-cover mb-4 rounded-lg" />

<div class="bg-neutral-900 flex flex-wrap gap-y-8 gap-x-20 justify-between px-8 py-6 rounded-lg xs:px-24">
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Projekt</h3>
        <p class="!m-0">{title}</p>
    </div>
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Klient</h3>
        <p class="!m-0">IONT tech s.r.o.</p>
    </div>
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Kategorie</h3>
        <p class="!m-0">Fullstack Aplikace</p>
    </div>
</div>

<br />
<br />
<br />

# Detaily projektu

IONT Admin je lehký, lokálně hostovaný administrační panel navržený pro konfiguraci a správu EV nabíječek přímo na
místě. Byl vytvořen speciálně pro **hardware založený na Raspberry Pi** a poskytuje přehledné rozhraní pro správce i
uživatele, kteří tak mohou upravovat nastavení nabíječky, sledovat její stav a provádět diagnostiku. Celý systém byl
navržen s důrazem na výkon, bezpečnost a jednoduchou údržbu.

Frontend je postaven pomocí **Svelte**, kompilovaný do statického HTML kvůli kompatibilitě s nízkoenergetickou ARM
architekturou. Komunikuje s **Fastify backendem**, který zpřístupňuje API pro ovládání nabíječky a propojuje se s \*
\*nízkoúrovňovým firmwarem** napsaným v C++. Součástí bylo také vytvoření **Bash skriptů\*\*, které automatizují celé
nastavení systému a jeho inicializaci na zařízeních s Raspberry Pi.

Významnou částí projektu byl vývoj **vlastního systému aktualizací**, který automaticky zajišťuje bezpečné aktualizace
softwaru – včetně ověřování podpisů a použití obfuskace pro ochranu proti neoprávněným zásahům. Tento mechanismus je
hluboce propojen s firmwarem nabíječky pro zajištění konzistence a spolehlivosti každé aktualizace.

Projekt vyžadoval silný důraz na **systémovou bezpečnost**, **vývoj s ohledem na hardware** a úzkou **spolupráci s
firmware týmem**, aby byla zajištěna stabilita i v omezeném prostředí.

<br />
<br />
<br />

# Funkce & Přínosy

**Vestavěné admin rozhraní**: Navrhl a vytvořil jsem bezpečný, offline-first admin panel pomocí **Svelte**, kompilovaný
do **HTML** pro plnou kompatibilitu s Raspberry Pi.

**Backend API vrstva**: Vyvinul jsem **Fastify server**, který propojuje frontend s firmwarem a zajišťuje ovládání,
konfiguraci i monitoring nabíječky.

**Automatizace nasazení systému**: Napsal jsem **Bash skripty** pro kompletní provisioning systému, síťové nastavení,
inicializaci prostředí i spuštění aplikace.

**Bezpečný update systém**: Implementoval jsem **automatický update mechanismus** pro software nabíječky s vestavěným \*
\*ověřením podpisů**, **obfuskací kódu** a **ochranou proti neoprávněným zásahům\*\*.

**Spolupráce s firmware týmem**: Úzce jsem spolupracoval s týmem vyvíjejícím firmware v C++, abych zajistil robustní
propojení backendu s nízkoúrovňovými službami.

<br />
<br />
<br />

# Technologie & Nástroje

**Svelte**, HTML, **TailwindCSS**, **Fastify**, **Node.js**, Bash, **Raspberry Pi**, REST API, Linux, Obfuskace,
Auto-update systém, Zabezpečení, Git, Bitbucket, Jira
