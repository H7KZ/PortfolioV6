---
date: '2025-09-15'
order: 0
title: Kreditožrouti
thumbnail: /images/projects/kreditozrouti/thumbnail.svg
tags:
    - Vlastní produkt
    - Fullstack
    - DevOps
lede: 'Plánovač rozvrhů pro studenty VŠE, živě na kreditozrouti.cz. Vytvořil jsem ho a sám provozuji, od scrapingu InSIS po nasazení. Čísla jsou skromná záměrně: tiše zachraňuje pár studentům semestr, každý den.'
client: 'Vlastní produkt'
role: 'Tvůrce & jediný správce'
timeline: 'Září 2025 – současnost'
sector: 'EdTech · Vysoké školství'
impact:
    - label: 'Studentů'
      value: '300+'
      sub: 'Zatím ho použilo'
    - label: 'Onboarding'
      value: '43%'
      sub: 'Dokončí průvodce'
    - label: 'Stav'
      value: 'Živě'
      sub: 'Monitoring, auto-deploy'
contributions:
    - num: '01'
      title: 'Scraping InSIS a plánování'
      body: 'Stahuje veřejná data o předmětech z InSIS a přidává nad ně lepší vyhledávání a plánování než univerzitní systém, takže student zaplní mezeru v rozvrhu během pár sekund. Název je vtip, který něco znamená: když je rozvrh nastavený špatně, předměty ti sežerou kredity ECTS. Kreditožrouti.'
    - num: '02'
      title: 'Z hackathonu do produktu'
      body: 'Vzniklo na 4FIS Mini Hackathonu nad živě scrapovanými daty, funkční MVP za 3,5 hodiny, první místo. Když kurz, který ho později hostil, skončil, převzal jsem ho a sám dovedl k hotovému produktu, ne jen k ukázce.'
    - num: '03'
      title: 'Produkční infrastruktura'
      body: 'Dnes běží s monitoringem, alertingem a automatickým nasazováním. Vue vepředu, Node s Redis a BullMQ workery za tím, kontejnerizováno s Docker a Traefik.'
    - num: '04'
      title: 'Bakalářská práce'
      body: 'Práce s InSIS vedla přímo k mé bakalářské práci: MCP server nad daty InSIS, hostovaný na univerzitních serverech pod oficiální doménou.'
stack:
    - 'TypeScript'
    - 'Vue.js'
    - 'Node.js'
    - 'Redis'
    - 'BullMQ'
    - 'Docker'
    - 'Traefik'
    - 'CI/CD'
    - 'Git'
gallery:
    - /images/projects/kreditozrouti/thumbnail.svg
---

Kreditožrouti je plánovač rozvrhů pro studenty Vysoké školy ekonomické v Praze. Stahuje veřejná data o předmětech z InSIS a přidává nad ně rychlejší a přehlednější vrstvu vyhledávání a plánování, takže student zaplní mezeru v rozvrhu během pár sekund místo proklikávání univerzitního systému.

Nikdy to nebyl startup a čísla jsou skromná záměrně: pár set studentů, hrstka z nich každý den, nalezeno hlavně přes Discord, Facebook a doporučení. Je to nástroj, který tiše zachraňuje pár studentům semestr, každý den. A když obě mé klientské spolupráce skončily, je to zároveň jediná věc na mém záznamu, která je živá, udržovaná a stále roste, což je přesně důvod, proč na ní záleží.
