---
date: '2024-11-25'
order: 7
title: Noteful
thumbnail: /images/projects/noteful/thumbnail.webp
tags:
    - Osobní
    - Design
---

<img src="/images/projects/noteful/thumbnail.webp" alt={title} class="w-full h-80 object-cover mb-4 rounded-lg" />

<div class="bg-neutral-900 flex flex-wrap gap-y-8 gap-x-20 justify-between px-8 py-6 rounded-lg xs:px-24">
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Projekt</h3>
        <p class="!m-0">{title}</p>
    </div>
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Klient</h3>
        <p class="!m-0">Osobní</p>
    </div>
    <div>
        <h3 class="!m-0 !mb-1 !font-semibold">Kategorie</h3>
        <p class="!m-0">Design</p>
    </div>
</div>

<br />
<br />
<br />

# Detaily projektu

Noteful je koncept mobilní aplikace navržený od základu ve **Figmě**, zaměřený na osobní organizaci bez kognitivní
zátěže, kterou většina aplikací na poznámky přináší. Premisa byla jednoduchá: většina aplikací se snaží dělat vše —
štítky, složky, pracovní prostory, spolupráci, markdown, přílohy — a nakonec to žádné z toho nedělá dobře pro
průměrného uživatele, který jen chce něco zapsat a zase to najít.

Design to zjednodušuje na dva základní pracovní postupy: **volné poznámky** a **strukturované nákupní seznamy**,
sjednocené
pod jedním rozhraním bez přepínání režimů nebo vnořené navigace. Informační architektura je záměrně plochá — vše je
dostupné jedním kliknutím z domovské obrazovky.

Vizuální jazyk aplikace vychází ze **soft neutrální palety** s jednou akcentní barvou, která se používá výhradně pro
interaktivní stavy, takže vizuální šum nesoutěží o pozornost, když se potřebujete soustředit. Typografie je nastavena
dostatečně velká pro pohodlné čtení v pohybu — v MHD, v obchodě — bez potřeby přiblížení.

Design pokrývá celou cestu uživatele: onboarding, prázdné stavy, vytváření a úpravu poznámek, správu seznamů,
vyhledávání a nastavení. Každá obrazovka byla navržena v nativním mobilním rozlišení s auto-layout komponentami, což
umožňuje předání designu vývojáři přímo bez dohadování se o rozestupy nebo chování prvků.

<br />
<br />
<br />

# Funkce & Designová rozhodnutí

**Plochá informační architektura**: Žádné složky, štítky ani vnořené pohledy. Poznámky a seznamy jsou zobrazeny
okamžitě po otevření, prohledatelné podle obsahu. Toto omezení nutí každé designové rozhodnutí sloužit
objevitelnosti, ne organizaci.

**Jednotný domovský prostor**: Poznámky a nákupní seznamy koexistují ve stejném seznamu seřazeném podle poslední
úpravy. Přepínání mezi typy nevyžaduje žádnou navigaci — rozdíl je vizuální, ne strukturální.

**Kontextuální prázdné stavy**: Každá obrazovka má propracovaný prázdný stav — ne generickou zprávu "nic zde není",
ale zprávu specifickou pro to, co uživatel chystá udělat. Onboarding přirozeně plyne z první prázdné domovské
obrazovky bez samostatného tutoriálu.

**Interakce primárně pro dotykové ovládání**: Gesta přejetím pro archivaci a smazání, dlouhý stisk pro vícenásobný
výběr, zatažení pro obnovení — vše mapováno na gesta, která uživatelé již znají z iOS a Androidu.

**Systém komponent s auto-layoutem**: Postaveno ve Figmě s auto-layoutem a variantami komponent pokrývajícími všechny
interaktivní stavy (výchozí, stisknutý, zakázaný, načítání). Systém se škáluje na nové obrazovky bez duplikování stylů.

<br />
<br />
<br />

# Technologie & Nástroje

**Figma**, Auto-layout, Varianty komponent, Návrh mobilního UI, UX výzkum, Návrh interakcí, Prototypování
