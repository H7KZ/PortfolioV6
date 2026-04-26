---
date: '2025-06-30'
title: LŠVPH - Materiály
author: Jan Komínek
thumbnail: /images/posts/lsvph/thumbnail.webp
tags:
    - LŠVPH
    - SSPŠ
---

# Základy programování v C\#

Vítejte u základů programovacího jazyka C#. Tyto materiály vás provedou od úplných začátků až po tvorbu jednoduchých
programů.

Pro další studium můžete využít oficiální skripta SSPŠ:

> **<a href="https://skripta.ssps.cz" target="_blank" rel="noopener noreferrer">Skripta SSPŠ - Programování</a>** (
> Hledejte sekci "Programování")

---

## Úvod, proměnné, datové typy

### Úvod do C#

C# (vyslovuje se "sí šarp") je moderní a všestranný programovací jazyk

- Je to **víceúčelový, objektově orientovaný** programovací jazyk
- Byl vytvořen společností **Microsoft** a představen v roce 2000
- Je velmi podobný jiným moderním jazykům, jako je Java. Pokud se naučíte C\#, bude pro vás snazší pochopit i další
  jazyky
- Patří do rodiny jazyků odvozených od C, což znamená, že jeho syntaxe (způsob psaní kódu) je podobná jazykům C, C++
  nebo Java, ale liší se například od Pythonu

### Struktura souboru

Každý C# soubor má základní strukturu, kterou prozatím nemusíme detailně řešit, stačí vědět, co jednotlivé části zhruba
dělají

- `using` - Na začátku souboru říkáme, jaké **knihovny** (předpřipravené sady nástrojů) chceme používat. Například
  `using System;` nám zpřístupní základní funkce jako `Console.WriteLine`
- `namespace`, `class` - Toto jsou organizační bloky kódu. Prozatím je **nebudeme řešit**
- `Main()` - Toto je **hlavní metoda** a startovní bod našeho programu. Většinu našeho kódu budeme psát právě sem, mezi
  složené závorky `{}` této metody
- `// komentář` - Text, který začíná dvěma lomítky, je **komentář**. Počítač ho úplně ignoruje a slouží pouze pro
  poznámky programátora

### Výpis do konzole: "Hello, World!"

Nejzákladnější operací je výpis textu na obrazovku (do konzole)

- `Console.WriteLine("Ahoj světe!");` vypíše zadaný text a **automaticky odřádkuje** (jako by na konci stiskl Enter)
- `Console.Write("Text");` vypíše text, ale **kurzor zůstane na stejném řádku**

### Datové typy

Proměnná je v podstatě "krabička" v paměti počítače, která má jméno a můžeme do ní uložit nějakou hodnotu. Každá
proměnná musí mít určený **datový typ**, který říká, jaký druh dat v ní bude uložen

- `string` - Slouží pro ukládání textu (řetězců). Text se vždy píše do uvozovek
    - `string jmeno = "Pepa";`
- `int` - Pro celá čísla (32bitová)
    - `int vek = 25;`
- `long` - Pro obrovská celá čísla (64bitová), když `int` nestačí
    - `long pocetHvezd = 1000000000000;`
- `double` - Pro desetinná čísla. Je to nejběžnější typ pro desetinná čísla
    - `double teplota = 23.7;`
- `float` - Méně přesné desetinné číslo. Často se používá v herním vývoji (např. v Unity). Hodnota musí končit písmenem
  `f`
    - `float rychlost = 15.5f;`
- `decimal` - Extrémně přesné desetinné číslo, vhodné pro finanční výpočty. Hodnota musí končit písmenem `m`
    - `decimal cena = 99.99m;`
- `char` - Pro uložení **jediného** znaku. Znak se píše do apostrofů
    - `char pismeno = 'A';`
- `bool` - Může nabývat pouze dvou hodnot: **pravda (`true`)** nebo **nepravda (`false`)**
    - `bool jePlnolety = true;`
    - Do `bool` proměnné můžeme uložit i výsledek porovnání: `bool jeVetsi = (5 > 3); // výsledek bude true`

#### Užitečné odkazy na datové typy

- [W3Schools: C# Data Types](https://www.w3schools.com/cs/cs_data_types.php)
- [Microsoft Docs: Built-in types](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types)

### Práce s proměnnými

S proměnnými můžeme provádět různé operace

#### Základní operace s čísly

```csharp
int a = 10;
int b = 5;
int soucet = a + b; // sčítání
int rozdil = a - b; // odčítání
int soucin = a * b; // násobení
int podil = a / b;  // dělení

a++; // Zvýší hodnotu 'a' o 1 (a = a + 1)
b--; // Sníží hodnotu 'b' o 1 (b = b - 1)

a += 5; // Zvýší hodnotu 'a' o 5 (a = a + 5)
```

#### Spojování textu (stringů)

```csharp
string jmeno = "Karel";
string prijmeni = "Novák";

// Klasické spojení pomocí +
string celeJmeno = jmeno + " " + prijmeni;
Console.WriteLine(celeJmeno); // Vypíše "Karel Novák"

// Moderní a přehlednější způsob (string interpolace)
string pozdrav = $"Ahoj, jmenuji se {jmeno} {prijmeni}.";
Console.WriteLine(pozdrav); // Vypíše "Ahoj, jmenuji se Karel Novák."
```

**Speciální znaky v textu (Escapování):**
Pokud chcete v textu použít uvozovky, musíte je "escapovat" zpětným lomítkem `\`

```csharp
string citat = "Mistr řekl: \"Učte se C#.\"";
Console.WriteLine(citat); // Vypíše: Mistr řekl: "Učte se C#."
```

---

## Konverze a podmínky

### Načítání vstupu od uživatele

Aby byl náš program interaktivní, potřebujeme od uživatele načítat data

- `Console.ReadLine()` - Přečte celý řádek, který uživatel napíše a potvrdí Enterem. **Vždy vrací datový typ `string`\!
  **

Když se pokusíte načíst text pomocí `Console.ReadLine()` a uložit ho přímo do číselné proměnné (třeba `int`), narazíte
na problém. Text `"18"` není to samé co číslo `18`. Proto musíme provést **konverzi** (převod) datových typů

### Konverze mezi typy

- `int.Parse(text)` - Převede `string` na `int`. Pokud text není platné číslo, program spadne s chybou. Toto je
  nejčastější způsob
- `Convert.ToInt32(hodnota)` - Univerzálnější metoda pro převod z různých typů na 32bitový `int`
- `promenna.ToString()` - Převede téměř jakoukoliv proměnnou (např. číslo) na `string`

#### Příklad

```csharp
Console.WriteLine("Zadej svůj věk:");
string vekJakoText = Console.ReadLine();
int vekJakoCislo = int.Parse(vekJakoText);

Console.WriteLine($"Za rok ti bude {vekJakoCislo + 1} let.");
```

#### Užitečné odkazy na konverzi

- [W3Schools: C\# Type Casting](https://www.w3schools.com/cs/cs_type_casting.php)
- [Microsoft Docs: Parsing strings](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/types/how-to-convert-a-string-to-a-number)

### Podmínky `if` / `else`

Podmínky nám umožňují spouštět části kódu pouze tehdy, když je splněn nějaký předpoklad

Základní syntaxe je `if (podmínka) { ... }`. Kód uvnitř složených závorek se provede pouze v případě, že je `podmínka`
vyhodnocena jako `true`

#### Porovnávací operátory

- `==` rovná se
- `!=` nerovná se
- `>` větší než
- `<` menší než
- `>=` větší nebo rovno
- `<=` menší nebo rovno

##### Příklad s chybou logiky

Následující kód nefunguje podle očekávání. Pokud `a` je 1, první podmínka ho změní na 2. Poté se hned kontroluje druhá
podmínka, která je teď taky pravdivá, a ta ho změní zpátky na 1

```csharp
int a = 1;
if (a == 1) {
    a = 2;
}
if (a == 2) { // Tato podmínka se kontroluje hned potom
    a = 1;
}
Console.WriteLine(a); // Vypíše 1
```

##### Řešení pomocí `if / else`

Konstrukce `else` říká, co se má stát, pokud podmínka `if` **nebyla** splněna. Tím zajistíme, že se provede vždy jen
jedna z větví

```csharp
int a = 1;
if (a == 1) {
    a = 2;
} else {
    a = 1;
}
Console.WriteLine(a); // Vypíše 2
```

Můžeme řetězit i více podmínek pomocí `if / else if / else`

### Bezpečné parsování s `TryParse`

Co když uživatel nezadá číslo, ale nějaký nesmysl? `int.Parse()` spadne. Bezpečnější je `int.TryParse()`, která se
pokusí o převod a vrátí `bool`, jestli se to povedlo

```csharp
int cislo;
Console.WriteLine("Zadej číslo:");
string vstup = Console.ReadLine();

if (int.TryParse(vstup, out cislo))
{
    Console.WriteLine($"Zadal jsi číslo {cislo}, dík.");
}
else
{
    Console.WriteLine("To není číslo! >:(");
}
```

### `Switch`

Pokud potřebujete otestovat jednu proměnnou na mnoho různých hodnot, místo dlouhého řetězce `if-else if` je přehlednější
použít `switch`

- `case` definuje jednu z možných hodnot
- `break` je nutné k ukončení daného `case`, aby kód "nepropadl" do dalšího
- `default` se provede, pokud žádný `case` neodpovídá hodnotě

```csharp
Console.WriteLine("Zadej své jméno:");
string jmeno = Console.ReadLine();

switch (jmeno)
{
    case "Honza":
        Console.WriteLine("Ahoj Honzo! Dnes ti to sluší!");
        break;
    case "Martin":
        Console.WriteLine("Ahoj Martine! Co máš k obědu?");
        break;
    default:
        Console.WriteLine("Ahoj neznámý člověče!");
        break;
}
```

### Užitečné odkazy na podmínky a `switch`

- [W3Schools: C# if...else](https://www.w3schools.com/cs/cs_conditions_elseif.php)
- [W3Schools: C# Switch](https://www.w3schools.com/cs/cs_switch.php)

### Cvičení

#### Cvičení: Plnoletost

Napište krátký program, který se zeptá uživatele na jeho věk a vypíše mu, jestli je plnoletý, nebo ne

<details>
<summary><strong>Řešení</strong></summary>

```csharp
Console.WriteLine("Zadej svůj věk: ");
string vstup = Console.ReadLine();
int vek;

if (int.TryParse(vstup, out vek))
{
    if (vek >= 18)
    {
        Console.WriteLine("Jsi plnoletý! Hurá!");
    }
    else
    {
        Console.WriteLine("Ještě si budeš muset chvíli počkat na řidičák.");
    }
}
else
{
    Console.WriteLine("Nezadal jsi platný věk.");
}
```

</details>

#### Cvičení: Kalkulačka

Vytvořte kalkulačku. Program se zeptá na první číslo, operátor (+, -, \*, /) a druhé číslo. Pomocí `switch` vypočítejte
a zobrazte výsledek

<details>
<summary><strong>Řešení</strong></summary>

```csharp
Console.WriteLine("Zadej první číslo:");
double prvniCislo = double.Parse(Console.ReadLine());

Console.WriteLine("Zadej operátor (+, -, *, /):");
string znak = Console.ReadLine();

Console.WriteLine("Zadej druhé číslo:");
double druheCislo = double.Parse(Console.ReadLine());

double vysledek = 0;

switch (znak)
{
    case "+":
        vysledek = prvniCislo + druheCislo;
        break;
    case "-":
        vysledek = prvniCislo - druheCislo;
        break;
    case "*":
        vysledek = prvniCislo * druheCislo;
        break;
    case "/":
        if (druheCislo == 0)
        {
            Console.WriteLine("Nelze dělit nulou!");
            return; // Ukončí program
        }
        vysledek = prvniCislo / druheCislo;
        break;
    default:
        Console.WriteLine("Neznámý operátor!");
        break;
}

Console.WriteLine($"Výsledek je: {vysledek}");
```

_Poznámka: Použili jsme `double` místo `int`, aby fungovalo dělení s desetinným výsledkem._

</details>

---

## Cykly

Cykly (smyčky) slouží k opakovanému provádění bloku kódu

### `while` cyklus

Cyklus `while` opakuje kód, **dokud je jeho podmínka pravdivá (`true`)**. Podmínka se kontroluje na začátku každého
opakování

```csharp
int cislo = 0;
while (cislo <= 5)
{
    Console.WriteLine(cislo);
    cislo++; // Důležité! Bez změny proměnné by cyklus běžel donekonečna.
}
// OUTPUT:
// 0
// 1
// 2
// 3
// 4
// 5
```

### `do-while` cyklus

Tento cyklus je podobný `while`, ale s jedním klíčovým rozdílem: **kód se provede vždy alespoň jednou** a teprve poté se
zkontroluje podmínka. Je ideální pro případy, kdy potřebujeme načíst vstup od uživatele a opakovat to, dokud nezadá
správnou hodnotu

```csharp
int cislo;
do
{
    Console.WriteLine("Zadej platné číslo:");
}
while (!int.TryParse(Console.ReadLine(), out cislo)); // Opakuj, dokud se parsování nepovede

Console.WriteLine($"Zadal jsi číslo {cislo}.");
```

### `for` cyklus

Nejčastěji používaný cyklus, pokud předem víme, kolikrát se má něco opakovat. Má tři části oddělené středníkem:

1. **Inicializace:** Vytvoření a nastavení počítací proměnné (např. `int i = 0`). Spustí se jen jednou na začátku
2. **Podmínka:** Kontroluje se před každým opakováním (např. `i < 5`). Pokud je `false`, cyklus končí
3. **Inkremetace:** Co se má stát po každém opakování (např. `i++`)

<!-- end list -->

```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}
// OUTPUT:
// 0
// 1
// 2
// 3
// 4
```

### `break` a `continue`

Tyto příkazy nám dávají větší kontrolu nad chováním cyklů

- `break;` - Okamžitě **ukončí** a "vyskočí" z celého cyklu
- `continue;` - Ukončí aktuální opakování (iteraci) a **přeskočí** na další

#### Příklad `break`

```csharp
for (int i = 0; i < 10; i++)
{
    if (i == 5)
    {
        break; // Jakmile i dosáhne 5, cyklus skončí.
    }
    Console.WriteLine(i);
}
// OUTPUT:
// 0, 1, 2, 3, 4
```

#### Příklad `continue`

```csharp
for (int i = 0; i < 5; i++)
{
    if (i == 2)
    {
        continue; // Když i je 2, zbytek kódu v iteraci se přeskočí.
    }
    Console.WriteLine(i);
}
// OUTPUT:
// 0, 1, 3, 4
```

### Užitečné odkazy na cykly

- [W3Schools: C# While Loop](https://www.w3schools.com/cs/cs_while_loop.php)
- [W3Schools: C# For Loop](https://www.w3schools.com/cs/cs_for_loop.php)

### Cvičení

#### Cvičení: Cookie Clicker

Vytvořte jednoduchou hru. Program bude v cyklu čekat na stisknutí jakékoliv klávesy. Za každé stisknutí se hráči přičte
jedna sušenka. Aktuální počet sušenek se neustále vypisuje. Jakmile počet dosáhne 20, program vypíše výherní hlášku a
skončí

<details>
<summary><strong>Řešení</strong></summary>

```csharp
int susenky = 0;

while (true) // Nekonečný cyklus, který ukončíme pomocí break
{
    Console.Clear(); // Smaže konzoli pro přehlednější výpis
    Console.WriteLine($"Tvůj počet sušenek: {susenky}");
    Console.WriteLine("Stiskni jakoukoliv klávesu pro získání další sušenky...");

    if (susenky >= 20)
    {
        Console.WriteLine("Vyhrál jsi! Máš dost sušenek!");
        break; // Ukončí while cyklus
    }

    Console.ReadKey(); // Počká na stisk klávesy
    susenky++;
}
```

</details>

---

## Pole a Listy

Když potřebujeme uložit více hodnot stejného typu (např. všechny známky ze školy), je nepraktické vytvářet spoustu
proměnných `znamka1`, `znamka2` atd. Místo toho použijeme kolekce, jako jsou pole a listy

### Pole (Array)

Pole je kolekce prvků s **pevnou, neměnnou velikostí**. Jakmile pole jednou vytvoříte, nemůžete ho zvětšit ani zmenšit

#### Syntaxe

```csharp
// Vytvoření pole pro 5 celých čísel. Zatím jsou všechny nulové.
int[] cisla = new int[5];

// Přiřazení hodnoty na konkrétní pozici (index)
// POZOR: Indexování začíná od 0!
cisla[0] = 10;
cisla[1] = 20;
// cisla[5] = 60; // Toto by způsobilo chybu, protože index 5 je mimo rozsah (0-4).

// Vytvoření pole s přímým naplněním hodnotami
string[] jmena = new string[] { "Adam", "Bára", "Cyril" };
```

K zjištění délky pole slouží vlastnost `.Length`

### `foreach` cyklus

Pro procházení všech prvků v poli (nebo jiné kolekci) je ideální cyklus `foreach`. Je jednodušší a bezpečnější než
`for`, protože se nemusíte starat o indexy

```csharp
string[] jmena = new string[] { "Adam", "Bára", "Cyril" };

foreach (string jmeno in jmena)
{
    Console.WriteLine($"Ahoj, {jmeno}!");
}
```

### List

List je modernější a flexibilnější verze pole. Jeho hlavní výhodou je, že má **dynamickou velikost** - můžete za běhu
programu přidávat a odebírat prvky

#### Syntaxe

`List` vyžaduje `using System.Collections.Generic;` na začátku souboru

```csharp
// Vytvoření prázdného listu pro ukládání celých čísel
List<int> znamky = new List<int>();

// Přidání prvků do listu
znamky.Add(1);
znamky.Add(3);
znamky.Add(2);

// Přístup k prvku přes index (stejně jako u pole)
Console.WriteLine(znamky[0]); // Vypíše 1

// Zjištění počtu prvků v listu pomocí vlastnosti .Count
Console.WriteLine($"Počet známek: {znamky.Count}");
```

### Užitečné odkazy na pole a listy

- [W3Schools: C# Arrays](https://www.w3schools.com/cs/cs_arrays.php)
- [W3Schools: C# For Each Loop](https://www.w3schools.com/cs/cs_foreach_loop.php)
- [Microsoft Docs: List Class](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=net-9.0)

### Cvičení

#### Cvičení: Průměr známek

Vytvořte program, který se bude v cyklu ptát na zadání známky. Zadané známky bude ukládat do `Listu`. Pokud uživatel
místo známky napíše "konec", cyklus se ukončí a program vypočítá a vypíše průměr všech zadaných známek

<details>
<summary><strong>Řešení</strong></summary>

```csharp
List<int> znamky = new List<int>();
string vstup;

do
{
    Console.WriteLine("Zadej známku (nebo napiš 'konec' pro ukončení):");
    vstup = Console.ReadLine();

    if (int.TryParse(vstup, out int znamka))
    {
        if (znamka >= 1 && znamka <= 5)
        {
            znamky.Add(znamka);
        }
        else
        {
            Console.WriteLine("Známka musí být od 1 do 5.");
        }
    }
} while (vstup.ToLower() != "konec");

if (znamky.Count > 0)
{
    double soucet = 0;
    foreach (int z in znamky)
    {
        soucet += z;
    }
    double prumer = soucet / znamky.Count;
    Console.WriteLine($"Tvůj průměr známek je: {prumer}");
}
else
{
    Console.WriteLine("Nezadal jsi žádné známky.");
}
```

</details>

---

## Metody

Metody jsou samostatné bloky kódu, které provádějí určitou operaci. Hlavní výhodou je, že můžeme kód napsat jednou a pak
ho volat (používat) z různých míst v programu, kolikrát chceme. Tím se vyhýbáme opakování kódu a zpřehledňujeme program

### Struktura metody

`[modifikátor] návratovýTyp JmenoMetody(parametry) { ... tělo metody ... }`

- **Návratový typ:** Datový typ hodnoty, kterou metoda vrací. Pokud metoda nic nevrací, použije se klíčové slovo `void`
- **JménoMetody:** Jak se metoda jmenuje. Mělo by být výstižné
- **Parametry:** Vstupní hodnoty, které metoda potřebuje pro svou práci. Jsou nepovinné
- **Tělo metody:** Vlastní kód, který se provede při zavolání metody

#### Příklad metody, která nic nevrací (`void`)

```csharp
// Definice metody
void Pozdrav()
{
    Console.WriteLine("Ahoj, toto je z metody!");
}

// Zavolání metody v Main
Pozdrav();
Pozdrav();
```

#### Příklad metody, která vrací hodnotu (`return`)

```csharp
// Definice metody, která přijímá jeden parametr a vrací string
string VytvorPozdrav(string jmeno)
{
    string vysledek = "Ahoj " + jmeno;
    return vysledek; // Klíčové slovo return vrací hodnotu a ukončuje metodu
}

// Zavolání v Main
string pozdravProPetra = VytvorPozdrav("Petr");
Console.WriteLine(pozdravProPetra); // Vypíše "Ahoj Petr"

Console.WriteLine(VytvorPozdrav("Jana")); // Vypíše "Ahoj Jana"
```

Metoda může mít více parametrů, které se oddělují čárkou: `SectiCisla(int a, int b)`

### Užitečné odkazy na metody

- [W3Schools: C# Methods](https://www.w3schools.com/cs/cs_methods.php)
- [Microsoft Docs: Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)

### Cvičení

#### Cvičení 1: Padding

Vytvořte metodu `PridejPadding`, která jako parametr vezme `string` a vrátí nový `string`, ke kterému budou na začátku i
na konci přidány 3 mezery

<details>
<summary><strong>Řešení</strong></summary>

```csharp
// Metodu definujeme mimo Main, ale uvnitř třídy Program
static string PridejPadding(string text)
{
    return "   " + text + "   ";
}

// Volání v Main
string sPaddingem = PridejPadding("adam");
Console.WriteLine($"'{sPaddingem}'"); // Vypíše '   adam   '
```

</details>

#### Cvičení 2: Vlastní Padding

Vylepšete předchozí metodu tak, aby přijímala dva parametry: text a počet mezer, které se mají přidat na každou stranu

<details>
<summary><strong>Řešení</strong></summary>

```csharp
static string PridejPadding(string text, int pocetMezer)
{
    // Možnost 1: Pomocí cyklu
    string mezery = "";
    for (int i = 0; i < pocetMezer; i++)
    {
        mezery += " ";
    }
    return mezery + text + mezery;

    // Možnost 2: Pomocí vestavěných funkcí (lepší způsob)
    // string sPravymPaddingem = text.PadRight(text.Length + pocetMezer, ' ');
    // string finalni = sPravymPaddingem.PadLeft(sPravymPaddingem.Length + pocetMezer, ' ');
    // return finalni;
}

// Volání v Main
string sPaddingem = PridejPadding("adam", 5);
Console.WriteLine($"'{sPaddingem}'"); // Vypíše '     adam     '
```

</details>

---

## Třídy a objekty

Zatím jsme pracovali se základními datovými typy (`int`, `string` atd.). Často ale potřebujeme pracovat se složitějšími
entitami, které mají více vlastností a schopností. Například `Člověk` má jméno, věk, a může se třeba představit. K
tomuto účelu slouží **třídy**

- **Třída (class):** Je jako **šablona** nebo "blueprint", která popisuje, jaké vlastnosti (proměnné) a schopnosti (
  metody) bude mít nějaký objekt
- **Objekt (object):** Je konkrétní **instance** (výskyt) vytvořená podle šablony třídy. Můžeme mít třídu `Auto`, ale
  objekty budou `mojeCerveneFerrari` a `sousedovaModraSkodovka`

### Vytvoření a použití třídy

Třídu definujeme pomocí klíčového slova `class`. Z ní pak v metodě `Main` (nebo jinde) vytváříme objekty pomocí
klíčového slova `new`

```csharp
// Třídu definujeme mimo metodu Main
public class Clovek
{
    // Vlastnosti (proměnné)
    public string jmeno;
    public int vek;

    // Metoda (schopnost)
    public void PredstavSe()
    {
        Console.WriteLine($"Ahoj, já jsem {jmeno} a je mi {vek} let.");
    }
}

// V metodě Main vytváříme objekty (instance)
class Program
{
    static void Main(string[] args)
    {
        // Vytvoření objektu 'karel' podle šablony 'Clovek'
        Clovek karel = new Clovek();
        // Nastavení vlastností objektu
        karel.jmeno = "Karel Novák";
        karel.vek = 30;

        Clovek jana = new Clovek();
        jana.jmeno = "Jana Dvořáková";
        jana.vek = 25;

        // Zavolání metody na konkrétním objektu
        karel.PredstavSe(); // Vypíše: Ahoj, já jsem Karel Novák a je mi 30 let.
        jana.PredstavSe();  // Vypíše: Ahoj, já jsem Jana Dvořáková a je mi 25 let.
    }
}
```

### Konstruktor

Konstruktor je speciální metoda, která se **zavolá automaticky při vytváření nového objektu** (`new Clovek()`). Slouží k
počátečnímu nastavení vlastností. Jmenuje se stejně jako třída

```csharp
public class Clovek
{
    public string jmeno;
    public int vek;

    // Konstruktor
    public Clovek(string jmenoC, int vekC)
    {
        Console.WriteLine("Vytváří se nový člověk!");
        // 'this' odkazuje na aktuální objekt, abychom rozlišili
        // vlastnost 'jmeno' od parametru 'jmenoC'.
        this.jmeno = jmenoC;
        this.vek = vekC;
    }

    public void PredstavSe()
    {
        Console.WriteLine($"Ahoj, já jsem {jmeno} a je mi {vek} let.");
    }
}

// V Main je teď vytvoření objektu jednodušší
static void Main(string[] args)
{
    Clovek honza = new Clovek("Honza", 17); // Zde se volá konstruktor
    Clovek martin = new Clovek("Martin", 16);

    honza.PredstavSe();
    martin.PredstavSe();
}
```

### Užitečné odkazy na třídy a objekty

- [W3Schools: C# Classes/Objects](https://www.w3schools.com/cs/cs_classes.php)
- [W3Schools: C# Constructors](https://www.w3schools.com/cs/cs_constructors.php)
- [Microsoft Docs: Classes](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/types/classes)

---

## Opakování a souhrnná cvičení

### Cvičení

#### Cvičení 1: Nákupní košík

Máme třídu `Produkt` s názvem a cenou. Vytvořte list několika produktů a napište kód, který vypočítá a vypíše průměrnou
cenu všech produktů v seznamu

**Startovní kód:**

```csharp
static void Main(string[] args)
{
    List<Produkt> produkty = new List<Produkt>();
    produkty.Add(new Produkt("Jablko", 25.5f));
    produkty.Add(new Produkt("Hruška", 30.2f));
    produkty.Add(new Produkt("Banán", 28.0f));
    produkty.Add(new Produkt("Mléko", 22.9f));

    float prumernaCena = 0;

    // VÁŠ KÓD ZDE

    Console.WriteLine($"Průměrná cena produktů je: {prumernaCena} Kč");
}

class Produkt
{
    public string nazev;
    public float cena;
    public Produkt(string nazev, float cena)
    {
        this.nazev = nazev;
        this.cena = cena;
    }
}
```

<details>
<summary><strong>Řešení</strong></summary>

```csharp
float celkovaCena = 0;
foreach(Produkt p in produkty)
{
    celkovaCena += p.cena;
}

if (produkty.Count > 0)
{
    prumernaCena = celkovaCena / produkty.Count;
}
```

</details>

#### Cvičení 2: Nejvzácnější drahokam

Máte seznam drahokamů. Každý drahokam má název, váhu v gramech, cenu za 1 kg čistého kamene a procentuální čistotu

1. Doplňte metodu `CelkovaCena()` ve třídě `Drahokam`. Cena se vypočítá jako:
   `(váha v kg * cena za kg) * (čistota / 100.0)`.
2. V `Main` metodě projděte seznam všech drahokamů a najděte ten, který má nejvyšší celkovou cenu.
3. Vypište informace o nejdražším drahokamu pomocí jeho metody `ToString()`.

**Startovní kód:**

```csharp
static void Main(string[] args)
{
    List<Drahokam> drahokamy = new List<Drahokam>();
    drahokamy.Add(new Drahokam("Rubín", 178.7f, 250000, 87));
    drahokamy.Add(new Drahokam("Smaragd", 120.5f, 800000, 62));
    drahokamy.Add(new Drahokam("Diamant", 50.2f, 5000000, 95));
    drahokamy.Add(new Drahokam("Ametyst", 450.0f, 20000, 76));

    // SEM PIŠTE KÓD PRO NALEZENÍ NEJDRAŽŠÍHO DRAHOKAMU
}

public class Drahokam
{
    public string jmeno;
    public float vahaVGramech;
    public float cenaZaKg;
    public int cistotaProcenta;

    public Drahokam(string jmeno, float vaha, float cena, int cistota)
    {
        this.jmeno = jmeno;
        this.vahaVGramech = vaha;
        this.cenaZaKg = cena;
        this.cistotaProcenta = cistota;
    }

    public float CelkovaCena()
    {
        // SEM DOPLŇTE VÝPOČET A VRÁCENÍ CENY
        return 0; // Dočasná návratová hodnota
    }

    public override string ToString()
    {
        return $"Nejdražší kámen je {jmeno}.\nJeho váha je {vahaVGramech}g a čistota {cistotaProcenta}%.\nCelková hodnota je {CelkovaCena()} Kč.";
    }
}
```

<details>
<summary><strong>Řešení</strong></summary>

```csharp
// Kód pro metodu CelkovaCena()
public float CelkovaCena()
{
    float vahaVKg = vahaVGramech / 1000.0f;
    float cenaCisteho = vahaVKg * cenaZaKg;
    float realnaCena = cenaCisteho * (cistotaProcenta / 100.0f);
    return realnaCena;
}

// Kód pro metodu Main()
if (drahokamy.Count == 0)
{
    Console.WriteLine("Seznam drahokamů je prázdný.");
    return;
}

Drahokam nejdrazsi = drahokamy[0]; // Předpokládáme, že první je nejdražší

foreach (Drahokam aktualniDrahokam in drahokamy)
{
    if (aktualniDrahokam.CelkovaCena() > nejdrazsi.CelkovaCena())
    {
        nejdrazsi = aktualniDrahokam; // Našli jsme nový nejdražší
    }
}

Console.WriteLine(nejdrazsi.ToString());
```

</details>
