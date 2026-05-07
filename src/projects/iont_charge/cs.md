---
date: '2024-07-25'
order: 3
title: IONT charge
thumbnail: /images/projects/iont_charge/thumbnail.webp
tags:
    - Pracovní
    - Online Platební Nabíjení
    - Fullstack
lede: 'Webová platební brána pro veřejné nabíjecí stanice elektromobilů — propojuje řidiče, platební infrastrukturu a fyzický hardware nabíječek v jednom bezpečném systému.'
client: 'IONT Tech s.r.o.'
role: 'Fullstack Engineer'
timeline: '2024'
sector: 'Clean Energy · Payments'
impact:
    - label: 'Architektura'
      value: 'Mikroservisy'
      sub: 'Docker Swarm'
    - label: 'Platba'
      value: 'ČSOB'
      sub: 'Certifikovaná brána'
    - label: 'Typ'
      value: 'Produkce'
      sub: 'Veřejná EV síť'
contributions:
    - num: '01'
      title: 'Integrace platební brány'
      body: 'Integrace zabezpečeného platebního systému ČSOB pro zpracování transakčních dat s plným soulad s bezpečnostními standardy pro veřejné nabíjení EV.'
    - num: '02'
      title: 'Fullstack platforma'
      body: 'Vývoj celého systému — SvelteKit na frontendu, Fastify s TypeScriptem na backendu, MongoDB jako databáze a čistá REST API vrstva.'
    - num: '03'
      title: 'Spolupráce na firmware API'
      body: 'Přímá koordinace s firmware týmem pro propojení backendu s master server API nabíječek EV, umožňující komunikaci a ovládání hardwaru v reálném čase.'
    - num: '04'
      title: 'Infrastruktura & DevOps'
      body: 'Správa nasazení přes Docker Swarm, konfigurace Linux serverů a implementace CI/CD pipeline pro automatizované a produkčně připravené nasazení.'
stack:
    - 'SvelteKit'
    - 'TailwindCSS'
    - 'Fastify'
    - 'TypeScript'
    - 'MongoDB'
    - 'Docker Swarm'
    - 'Linux'
    - 'CI/CD'
    - 'REST API'
gallery:
    - /images/projects/iont_charge/thumbnail.webp
---

IONT Charge je moderní webová platební brána vyvinutá pro veřejné nabíjecí stanice elektromobilů, která umožňuje plynulé online platby mezi řidiči a nabíjecí infrastrukturou IONT. Hlavní výzvou bylo propojit certifikovanou bankovní platební bránu s komunikací v reálném čase s fyzickým hardwarem nabíječek — což vyžadovalo úzkou spolupráci s firmware týmem i splnění finančních compliance požadavků. Systém byl postaven na mikroservisové architektuře nasazené přes Docker Swarm, díky čemuž je škálovatelný a připravený pro produkční provoz.
