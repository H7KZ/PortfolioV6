---
date: '2024-10-25'
order: 5
title: IONT info
thumbnail: /images/projects/iont_info/thumbnail.webp
tags:
    - Pracovní
    - Mobilní ovladač
    - Fullstack
---

<img src="/images/projects/iont_info/landing.webp" alt={title} class="w-full h-80 object-cover mb-4 rounded-lg" />

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

IONT Info je fullstack webová aplikace navržená pro efektivní správu a monitoring nabíječek elektromobilů (EV).
Platforma poskytuje uživatelsky přívětivý ovládací panel pro správu nabíječek, sledování v reálném čase a optimalizaci
výkonu. Projekt byl vyvinut kompletně od nuly – od nastavení infrastruktury, přes nasazení mikroservis, až po vývoj
frontendové a backendové části.

Pro zajištění škálovatelnosti a spolehlivosti byl systém nasazen pomocí **Docker Swarm** a a**rchitektury založené na
mikroservisách**, což umožňuje efektivní správu více nabíjecích stanic. Backend byl vyvinut v **Node.js s Fastify** a
poskytuje robustní API, které hladce komunikuje s nabíjecím hardwarem založeným na **Raspberry Pi**. Frontend byl
postaven pomocí **SvelteKit** a **TailwindCSS**, čímž vzniklo plynulé a responzivní uživatelské rozhraní optimalizované
pro desktop i mobilní zařízení.

Klíčovou součástí projektu byla **úzká spolupráce s firmware týmem**, což zajistilo bezproblémovou komunikaci mezi
ovládacím panelem a fyzickými nabíječkami. Dále byly nasazeny nástroje pro **správu Linux serverů**, **CI/CD pipeline**
a **DevOps postupy**, které zefektivnily nasazení a údržbu systému. Výsledkem je výkonné cloudové řešení schopné
efektivně spravovat rozsáhlé sítě EV nabíječek.

<div class="flex justify-center items-center mb-16">
    <img src="/images/projects/iont_info/phones.webp" alt={title} class="w-9/10 object-cover" />
</div>

# Funkce & Přínosy

**Škálovatelná infrastruktura**: Navrhl a implementoval jsem cloudovou architekturu využívající **Docker Swarm** a \*
\*mikroservisy\*\*, čímž jsem zajistil škálovatelnost a spolehlivost.

**Kompletní vývoj systému**: Vedl jsem fullstack vývoj pomocí **SvelteKit**, **Node.js**, **Fastify** a **MongoDB**, a
vytvořil optimalizované, responzivní uživatelské rozhraní pomocí **TailwindCSS**.

**Serverová a DevOps správa**: Konfiguroval jsem **Linuxové servery**, automatizoval nasazení pomocí **CI/CD pipeline**
a zajišťoval jejich správu.

**Spolupráce s firmware týmem**: Úzce jsem spolupracoval s firmware vývojáři na integraci backendových služeb s
nabíjecími stanicemi na bázi **Raspberry Pi**.

**Optimalizace výkonu systému**: Zaměřil jsem se na návrh **systémové architektury**, **RESTful API** a správu \*
\*cloudové infrastruktury\*\* pro zvýšení efektivity.

<br />
<br />
<br />

# Technologie & Nástroje

**SvelteKit**, TailwindCSS, HTML, **Node.js**, **Fastify**, REST API, **MongoDB**, Docker Swarm, Linux, **CI/CD**,
Bitbucket, Jira, **Git**, Bash, Raspberry Pi
