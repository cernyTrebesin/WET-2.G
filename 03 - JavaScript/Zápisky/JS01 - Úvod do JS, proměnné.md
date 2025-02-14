# Úvod do JS, práce s proměnnými

## Co je to JavaScript?

-   JavaScript je dynamický programovací jazyk, který přidává interaktivitu a dynamiku na webové stránky.
-   Hlavní role JavaScriptu na webové stránce:
    -   Reagovat na akce uživatele (např. kliknutí na tlačítko).
    -   Validovat formuláře nebo zpracovávat data přímo na straně uživatele.
    -   Animovat prvky a měnit obsah stránky bez nutnosti jejího obnovení.
-   Rozdíl oproti HTML a CSS:
    -   HTML definuje strukturu stránky.
    -   CSS určuje její vzhled.
    -   JavaScript zajišťuje interaktivitu a logiku.
-   Význam v moderním webu:
    -   JavaScript pohání většinu interaktivních funkcí, které na webech používáme.

## Vládání JS do HTML

-   Přímo v HTML

```HTML
<script>
    console.log("Hello world!");
</script>
```

-   Externí soubor

```HTML
<script src="script.js"></script>
```

```JavaScript
console.log("Hello world!");
```

## Proměnné - způsoby vytvoření

Existují 3 způsoby zápisu proměnných.

### let

Základní proměnná, kterou později lze přespsat

```JavaScript
let brainrot = "skibidi"
```

Později můžeme tuto hodnotu přepsat (není potřeba znovu deklarovat proměnnou).

```JavaScript
brainrot = "mango"
```

### const

Proměnná, jejíž hodnotu nemůžeme přepsat.

```JavaScript
const brainrot = "skibidi"
```

### var

Zastaralý způsob deklarace proměnné, doporučuji nepoužívat.

ChatGPT strašně rád hází kódy s tímto způsobem deklarace proměnných, tudíž díky tomu poznám podvádění :)

Je možné taky vidět ve starých kódech na internetu.

Funguje podobně jako let.

```JavaScript
var brainrot = "skibidi"
```

## Proměnné - datové typy

### string

Text, psaný v uvozovkách.

```JavaScript
let jmeno = "Spytihněv"
```

### int

Celé číslo (bez desetinné tečky), psáno bez uvozovek.

```JavaScript
let hodnota = 420
```

### float / double

Desetinné číslo, psáno bez uvozovek (používáme desetinnou tečku).

```JavaScript
let hodnota = 3.14
```

### boolean

Hodnota true/false.

```JavaScript
let chillGuy = true
```

## Práce s proměnnými

### Práce s textem

Text můžeme spojovat.

```JavaScript
let text1 = "Low"
let text2 = "Taper"
let text3 = "Fade"

Console.Log(text1 + text2 + text3)
```

Výstup kódu bude "LowTaperFade" - všimněte si, že ve výstupu se nenachází mezery. Musíme je tam přidat.

Mezery můžeme přidat pomocí přidáním +

```JavaScript
Console.Log(text1 + " " + text2 + " " + text3)
```

Nebo pomocí interpolace

```JavaScript
Console.Log("${text1} ${text2} ${text3}")
```

Když používáme zápis pomocí interpolace, musíme každou proměnnou zapsat do složených závorek (pravý alt + b/n) a přidat na začátek $ (pravý alt + ů)

Tento složený text lze i uložit do samostatné proměnné, kterou poté můžeme vypsat

```JavaScript
let velkyText = text1 + " " + text2 + " " + text3
Console.Log(velkyText)
```

### Matematické operace

Začněme deklarací 2 celočíselných proměnných

```JavaScript
let a = 3
let b = 5
```

V JavaScriptu můžeme:

sčítat (+)

```JavaScript
console.Log(a+b)
```

odečítat (-)

```JavaScript
console.Log(a-b)
```

násobit (\*)

```JavaScript
console.Log(a*b)
```

dělit (/)

```JavaScript
console.Log(a/b)
```

modulo (%)

Modulo udáva zbytek po dělení dvou čísel

`6%3 = 0` (protože 6/3 = 2 a zbytek 0)

`5%3 = 2` (protože 5/3 = 1 a zbytek 2)

```JavaScript
console.Log(a%b)
```
