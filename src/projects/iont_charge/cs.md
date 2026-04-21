---
date: '2024-07-25'
order: 3
title: IONT charge
thumbnail: /images/projects/iont_charge/thumbnail.webp
tags:
    - Pracovní
    - Online Platební Nabíjení
    - Fullstack
---

<img src="/images/projects/iont_charge/thumbnail.webp" alt={title} class="w-full h-80 object-cover mb-4 rounded-lg" />

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
        <p class="!m-0">Fullstack Application</p>
    </div>
</div>

<br />
<br />
<br />

# Detaily projektu

IONT Charge je moderní webová platební brána pro veřejné nabíjecí stanice elektromobilů (EV), která umožňuje pohodlné
online platby při nabíjení. Systém propojuje řidiče s nabíjecí infrastrukturou prostřednictvím bezpečného a intuitivního
rozhraní a zajišťuje reálnou komunikaci mezi frontendem, backendovými službami a fyzickými nabíječkami.

Aplikace byla postavena na **mikroslužbové architektuře** a nasazena pomocí **Docker Swarm**. Backend je vyvíjen v \*
\*TypeScriptu s Fastify** a obsahuje robustní vrstvu **REST API**. Součástí je i integrace s **platební bránou ČSOB**,
která zajišťuje bezpečné a standardům vyhovující zpracování finančních transakcí. Uživatelské rozhraní na frontendové
straně, vytvořené pomocí **SvelteKit a TailwindCSS\*\*, nabízí čistý a responzivní zážitek na všech zařízeních.

Klíčovou částí projektu byla hluboká integrace s **API master serveru** od firmware týmu, která umožňuje přímou
komunikaci s nabíječkami. Úzce jsem spolupracoval s vývojáři firmwaru, abych sladil chování backendu s nízkoúrovňovou
komunikací s hardwarem. Vzhledem k povaze systému (práce s penězi a fyzickými zařízeními) byly v celém stacku uplatněny
**bezpečnostní best practices**.

Infrastruktura projektu byla rozšířena o **CI/CD pipeliny**, správu **Linux serverů** a kontejnerizované nasazení, což
vedlo ke škálovatelnému a produkčně připravenému řešení pro veřejné nabíjení EV.

<br />
<br />
<br />

# Funkce & Přínosy

**Integrace platební brány**: Nasazení **bezpečné platební brány ČSOB**, včetně zpracování citlivých dat v souladu s
požadavky na bezpečnost.

**Vývoj Fullstack systému**: Vývoj backendu i frontendu pomocí **SvelteKit**, **Fastify (TypeScript)** a **MongoDB**,
zajišťující plynulé rozhraní i spolehlivé API.

**Infrastruktura & DevOps**: Nasazení pomocí **Docker Swarm**, správa **Linuxových serverů** a automatizace procesů
pomocí **CI/CD nástrojů**.

**Spolupráce s firmware týmem**: Koordinace s týmem zajišťujícím firmware a implementace jejich **API pro master server
nabíječek** do vlastního backendu.

**Bezpečný návrh systému**: Důraz na bezpečnost a škálovatelnost – od návrhu **REST API** až po platební procesy pro
koncové uživatele.

<br />
<br />
<br />

# Technologie & Nástroje

**SvelteKit**, TailwindCSS, HTML, **Fastify (TypeScript)**, REST API, **MongoDB**, Docker Swarm, Linux, **CI/CD**,
Bitbucket, Jira, **Git**, Bash, **ČSOB platební brána**
