---
date: '2025-11-19'
order: 1
title: SITH GUI (DeepTrace)
thumbnail: /images/projects/corac_sith/thumbnail.webp
tags:
    - Pracovní
    - Vizualizace dat
    - Frontend
---

<img src="/images/projects/corac_sith/hashchain.webp" alt={title} class="w-full h-56 object-cover mb-4 rounded-lg shadow-lg" />

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

SITH GUI (obchodně označovaný jako **DeepTrace**) je specializovaná **webová aplikace** vyvinutá pro CORAC Engineering,
která zajišťuje **původ a integritu dat z pozorování Země (EO)**. Aplikace slouží jako klíčové rozhraní pro
poskytovatele a konzumenty dat, kterým umožňuje ověřit rodokmen (lineage) a autenticitu dat, aniž by bylo nutné přenášet
samotné citlivé soubory.

Projekt je postaven na moderním **Vue.js** stacku s silným důrazem na bezpečnost a vizualizaci. Integruje ověřování na
straně klienta pomocí **AWS User Pools (Cognito) a OAuth**, což zajišťuje bezpečné řízení přístupu. Jádrem aplikace je
interaktivní vizualizace datového rodokmenu pomocí **D3.js**, která uživatelům poskytuje přehlednou grafickou
reprezentaci toho, jak byla data zpracována a jak procházela dodavatelským řetězcem.

Vývoj se zaměřil na **výkon a spolehlivost**, s využitím **Shadcn** pro konzistentní UI/UX a přísným ověřováním
integrity souborů pomocí kryptografických hashů. Systém umožňuje správu důvěryhodných datových zdrojů a ověřování vůči
hash-chainu (řetězci hashů) přímo v prohlížeči uživatele, přičemž dodržuje architekturu "zero-trust", kde ověření
probíhá na straně klienta.

<br />
<br />
<br />

# Funkce & Přínosy

**Interaktivní vizualizace rodokmenu**: Využívá **D3.js** k vykreslování komplexních grafů zobrazujících historii (
rodokmen) datových souborů. Uživatelé mohou vizuálně sledovat původ souboru a jeho následné kroky zpracování
prostřednictvím služby "Query Trace".

**Ověření integrity na straně klienta**: Implementuje robustní systém ověřování **Hash-chain**, kde prohlížeč nezávisle
ověřuje integritu datových bloků vůči důvěryhodným záznamům, čímž zajišťuje, že s daty nebylo manipulováno.

**Správa důvěryhodného dodavatelského řetězce**: Poskytuje administrativní rozhraní pro konfiguraci a schvalování (
whitelisting) důvěryhodných zdrojů dat (poskytovatelů a zpracovatelů), což systému umožňuje automaticky vyhodnotit
důvěryhodnost příchozích dat.

**Bezpečné ověřování**: Integrováno s **AWS User Pools** a OAuth pro bezpečné ověřování pouze na straně klienta, což
chrání přístup k citlivým údajům o historii dat při zachování plynulého uživatelského zážitku.

**Moderní technologický stack**: Postaveno na **Vue.js**, **Vite** a **pnpm** pro vysoký výkon, a **Shadcn UI** pro
profesionální, responzivní design. Kódová základna vynucuje přísné standardy kvality prostřednictvím automatizovaného
lintingu a formátování.

<br />
<br />
<br />

# Technologie & Nástroje

**Vue.js**, **D3.js**, **Node.js** (v22+), **AWS Cognito** (OAuth), **Shadcn UI**, **pnpm**, Vite, REST API Integration,
Kryptografie (Hashing)
