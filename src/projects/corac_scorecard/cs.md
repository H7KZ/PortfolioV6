---
date: '2025-11-18'
order: 2
title: Scorecard
thumbnail: /images/projects/corac_scorecard/thumbnail.webp
tags:
    - Pracovní
    - Reportovací Nástroj
    - Frontend
---

<img src="/images/projects/corac_scorecard/main.webp" alt={title} class="w-full h-56 object-cover mb-4 rounded-lg shadow-lg" />

<div class="bg-neutral-900 flex flex-wrap gap-y-8 gap-x-20 justify-between px-8 py-6 rounded-lg xs:px-24">
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Projekt</h3>
        <p class="!m-0">{title}</p>
    </div>
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Klient</h3>
        <p class="!m-0">CORAC Engineering</p>
    </div>
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Kategorie</h3>
        <p class="!m-0">Frontend</p>
    </div>
</div>

<br />
<br />
<br />

# Detaily projektu

Scorecard je **webová aplikace** vyvinutá pro CORAC Engineering, postavená na frameworku **Vue.js**, která slouží jako
pokročilý nástroj pro správu a generování bezpečnostních reportů. Aplikace funguje jako interaktivní tabulkový procesor
navržený specificky pro potřeby kybernetických auditorů, kterým umožňuje efektivně zadávat data z analýz rizik a
exportovat je do formátů pro koncové klienty.

Projekt byl vyvíjen s důrazem na **přenositelnost dat, uživatelskou přívětivost a kustomizaci výstupů**. Klíčovou
funkcionalitou je možnost exportovat zpracovaná data do **PDF reportů**, které jsou plně konfigurovatelné (včetně
vložení loga klienta, názvu společnosti a dalších metadat). Aplikace rovněž podporuje ukládání a načítání stavu
pomocí \*
\*JSON formátu\*\*, což usnadňuje zálohování a přenos práce mezi různými zařízeními bez nutnosti serverové databáze.

Vývoj probíhal s využitím moderního frontendového stacku. Pro zajištění konzistence a kvality kódu byly implementovány
striktní **lintery a formátovače**. Uživatelské rozhraní využívá sadu komponent **Shadcn**, což zajišťuje čistý design a
intuitivní ovládání. Build proces a správa závislostí jsou optimalizovány pomocí nástrojů jako **pnpm** a **Vite**, což
zaručuje vysoký výkon jak při vývoji, tak v produkčním nasazení.

<br />
<br />
<br />

# Funkce & Přínosy

**Profesionální reporting**: Automatizovaný export dat do **PDF** s možností "white-label" úprav (vlastní loga,
hlavičky), což zefektivňuje předávání výstupů z bezpečnostních auditů klientům.

**Správa a přenositelnost dat**: Možnost exportu a importu kompletních tabulek do formátu **JSON**. To umožňuje snadné
zálohování, sdílení rozpracovaných reportů mezi kolegy nebo přenos práce na jiné zařízení.

**Moderní UI/UX**: Využití komponent **Shadcn** a reaktivity **Vue.js** poskytuje auditorům přehledné a rychlé rozhraní
pro práci s velkým množstvím dat bez zbytečného kognitivního zatížení.

**Standardizace vývoje**: Projekt využívá robustní sadu nástrojů pro **kvalitu kódu** (linting, formatting) a rychlý
balíčkovací systém (**pnpm**), což zajišťuje snadnou udržovatelnost a rozšiřitelnost aplikace v budoucnu.

**Podpora pro compliance**: Nástroj je navržen tak, aby strukturovaně podporoval procesy spojené s analýzou rizik (např.
pro směrnici **NIS2**), čímž snižuje administrativní zátěž auditorů.

<br />
<br />
<br />

# Technologie & Nástroje

**Vue.js**, **Node.js** (v22+), **Shadcn UI**, **pnpm**, npm, Vite, **JSON**, PDF Generation, ESLint, Prettier
