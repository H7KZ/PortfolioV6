---
date: '2025-06-30'
title: LŠVPH - Materiály
author: Jan Komínek
thumbnail: /images/posts/lsvph/thumbnail.webp
tags:
    - LŠVPH
    - SSPŠ
---

# Úvod do Game Designu: Jak navrhnout zábavnou hru 🎮

> Vítejte v kurzu herního designu! Už víte, jak napsat kód v C# a jak se pohybovat v Unity. Ale co přesně dělá hru \*
> \*zábavnou**? Proč jsou některé hry návykové a jiné upadnou v zapomnění? Odpověď leží v **herním designu\*\* – umění a
> řemesle tvorby zážitků

---

## Co je to Game Design?

Game design není programování, kreslení ani skládání hudby. Je to **proces navrhování pravidel, systémů a obsahu hry s
cílem vytvořit pro hráče specifický zážitek**

- **Rozdíl mezi „udělat hru“ a „navrhnout hru“**
    - **Udělat hru** je technická realizace – programování, modelování, animace. Je to řemeslo
    - **Navrhnout hru** je vytvoření plánu, podle kterého se hra dělá. Je to vize. Herní designér je architekt, který
      navrhne dům; programátoři a grafici jsou stavitelé, kteří ho postaví

- **Game design jako tvorba zážitku**
  Designér se neptá "Jak naprogramuju skok?", ale spíše "Jaký pocit má mít hráč ze skoku? Má být lehký a plovoucí jako v
  _Super Mario_, nebo těžký a realistický?". Cílem je vyvolat emoce: radost, napětí, strach, zvědavost, pocit triumfu

- **Příklady a co na nich funguje:**
    - **_Minecraft:_** Zážitkem je **svoboda, kreativita a objevování**. Design hry vám dává nástroje a nechává vás
      tvořit vlastní příběhy
    - **_Portal:_** Zážitkem je **pocit chytrosti a intelektuálního vítězství**. Design hádanek vás postupně učí novým
      konceptům a nechá vás je kreativně kombinovat
    - **_Dark Souls:_** Zážitkem je **překonávání extrémní výzvy**. Design hry vás trestá za chyby, ale odměňuje za
      učení a trpělivost, což vede k obrovské satisfakci

---

## Základní Prvky Hry

Každá hra, od šachů po _Cyberpunk 2077_, je postavena na těchto základních pilířích:

- **Cíl (Goal):** Co se hráč snaží dosáhnout? (Zachránit princeznu, získat nejvyšší skóre, vyřešit záhadu, dostat se na
  konec levelu). Cíl dává hráči směr a motivaci

- **Pravidla (Rules):** Co hráč může a nemůže dělat? Pravidla definují herní prostor a možnosti. (Mario může skákat na
  nepřátele, ale nemůže se jich dotknout z boku)

- **Výzva (Challenge):** Překážky, které stojí mezi hráčem a cílem. Bez výzvy není hra, jen interaktivní film. Výzva
  musí být vyvážená – ne příliš lehká, ani frustrující

- **Zpětná vazba (Feedback):** Jak hra komunikuje s hráčem, že se něco stalo. Je to zvuk sebrané mince, otřes obrazovky
  při výbuchu, červenající se ukazatel zdraví, nebo jen číslo skóre. Dobrý feedback je okamžitý a srozumitelný

### Základní herní smyčka (Core Game Loop)

Toto je **nejdůležitější koncept** v designu. Je to sekvence akcí, které hráč opakuje stále dokola. Tato smyčka musí být
sama o sobě zábavná

- **Příklad (Pac-Man):**
    1. Hráč vidí tečky a duchy (výzva)
    2. Pohne se, aby snědl tečku (akce)
    3. Získá body a tečka zmizí (feedback a odměna)
    4. Opakuje, dokud nevyčistí bludiště nebo ho nechytí duch

---

## Typy Herních Mechanik

Mechaniky jsou **slovesa hry** – jsou to akce, které hráč může provádět

- **Příklady základních mechanik:** Skákání, střelba, sbírání předmětů, řešení hádanek, vylepšování postavy (upgrady),
  plížení, dialogové volby

- **Singleplayer vs. Multiplayer:** Hra proti počítačem řízeným výzvám vs. hra s ostatními lidmi (spolupráce nebo
  soupeření)

- **RNG vs. Skill-based:** Jak velkou roli hraje náhoda (Random Number Generation) oproti schopnostem hráče?
    - **Skill:** Šachy, _Counter-Strike_ – výsledek závisí primárně na dovednostech
    - **RNG:** Poker, deskové hry s kostkami – náhoda hraje velkou roli
    - Většina her je kombinací obojího

---

## Herní Žánry

Žánry jsou "škatulky" pro hry s podobnými mechanikami a tématy. Pomáhají hráčům najít to, co je baví

- **Platformer (Plošinovka):** Hlavní mechanikou je skákání. (_Super Mario Bros., Celeste_)
- **FPS (First-Person Shooter):** Hra viděná z pohledu první osoby, hlavní mechanikou je střelba. (_DOOM, Call of Duty_)
- **RPG (Role-Playing Game):** Hráč se vžívá do role postavy, rozvíjí její schopnosti a prožívá příběh. (_The Witcher 3,
  Skyrim_)
- **Puzzle (Logická hra):** Hra zaměřená na řešení hádanek. (_Portal, Tetris_)
- **Simulace (Simulation):** Snaží se co nejvěrněji napodobit reálnou aktivitu. (_Microsoft Flight Simulator, The Sims_)

---

## Jak se dělá hra – Základní proces

Vývoj hry není chaos, má svůj (ideální) postup

**Nápad → Game Design Dokument → Prototyp → Testování → Iterace**

1. **Nápad:** Počáteční myšlenka. "Co takhle hra o vesmírném instalatérovi?"
2. **Game Design Document (GDD):** Živý dokument, který popisuje všechny aspekty hry – příběh, mechaniky, postavy,
   úrovně... Je to blueprint pro celý tým
3. **Prototyp:** Rychle vytvořená, ošklivá verze hry, která testuje jen jednu věc: **Je hlavní herní smyčka zábavná?**
4. **Testování:** Nechte hrát hru někoho jiného\! Získáte neocenitelnou zpětnou vazbu
5. **Iterace:** Na základě testování se vraťte zpět, vylepšete design a opakujte cyklus

- **Role v týmu:**
    - **Designér:** Vymýšlí pravidla a zážitek
    - **Programátor:** Píše kód a oživuje mechaniky
    - **Grafik:** Tvoří vizuální podobu hry
    - **Zvukař:** Stará se o hudbu a zvukové efekty
    - **Tester:** Hledá chyby a poskytuje zpětnou vazbu

---

## Co dělá hru zábavnou? ✨

Proč nás některé hry tak pohltí? Často za to mohou tyto psychologické principy:

- **Flow State:** Stav naprostého pohlcení, kdy nevnímáte čas. Nastává, když je **výzva hry v dokonalé rovnováze se
  schopnostmi hráče**. Není to ani nuda, ani frustrace
- **Pocit úspěchu (Achievement):** Radost z překonání těžké překážky nebo dosažení cíle
- **Risk vs. Odměna (Risk vs. Reward):** Napětí z riskování něčeho cenného pro možnost získat ještě větší odměnu
- **Příběh nebo silná mechanika:** Hra vás může bavit buď díky poutavému příběhu, nebo prostě proto, že její základní
  mechanika je extrémně uspokojivá (jako čištění řádků v _Tetrisu_)

---

## Nástroje pro Začátečníky

- **Unity:** Skvělá volba pro začátečníky i profesionály. Je flexibilní, má obrovskou komunitu a spoustu dostupných
  materiálů pro učení. Je to motor, který vám umožní realizovat vaše designové nápady

---

## Časté chyby, kterým se vyhnout 💣

- **Scope Creep (Nemoc z nápadů):** Během vývoje neustále přidáváte nové a nové nápady, až projekt naroste do
  nezvladatelných rozměrů a nikdy ho nedokončíte. **Řešení: Držte se původního plánu a buďte nemilosrdní v ořezávání**

- **Nereálné cíle:** "Chci udělat GTA s příběhem God of War za víkend." Vývoj her je maraton, ne sprint. **Řešení:
  Začněte s co nejmenším projektem. Klon jednoduché hry jako _Pong_ nebo _Flappy Bird_ vás naučí víc než nedokončené MMO
  **

- **Bez testování:** Myslíte si, že vaše hra je skvělá a intuitivní. Ale není. **Řešení: Nechte hrát vaši hru kamarády,
  rodinu, kohokoliv. Dívejte se jim přes rameno a mlčte.** Uvidíte, kde mají problémy

- **Nudná mechanika:** Pokud hlavní smyčka není zábavná, žádné množství grafiky nebo příběhu to nezachrání. **Řešení:
  Věnujte nejvíce času prototypování a ladění hlavní mechaniky**

- **Příliš složitá nebo špatně vysvětlená pravidla:** Hráč je zmatený a neví, co má dělat, takže hru vypne. **Řešení:
  Učte hráče pravidla postupně a ideálně hrou samotnou ("ukaž, neříkej")**

- **Neznalost cílové skupiny:** Když děláte hru "pro všechny", často ji ve skutečnosti neděláte pro nikoho. **Řešení:
  Určete si, pro koho hru děláte. Pro hardcore stratégy? Pro děti? Pro příležitostné hráče na mobilu?**

---

## Skupinová práce: Navrhněte hru! ✍️

Nyní je řada na vás!

- **Úkol:** Rozdělte se do malých skupin (dvojice/trojice). Během 15–30 minut zkuste společně navrhnout koncept
  jednoduché hry
- **Cíl:** Vytvořit krátký popis hry, který odpoví na základní otázky:
    - Jaký je **název** a **žánr** hry?
    - Jaký je **hlavní cíl** hráče?
    - Jaká je **hlavní herní smyčka**? (Jaké 3-4 akce hráč opakuje?)
    - Čím je hra **unikátní nebo zajímavá**?
- Následně každá skupina svůj nápad krátce představí ostatním. Cílem není dokonalý design, ale procvičit si kreativní
  myšlení a spolupráci
