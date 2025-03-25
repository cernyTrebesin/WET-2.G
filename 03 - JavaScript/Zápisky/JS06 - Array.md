# Array (pole)

Array je speciání objekt, díky kterému můžu uložit více hodnot do jedné proměnné.

## Vytvoření pole

Všechny hodnoty uložené v poli jsou v hranatých závorkách

```JS
const pole = []; // inicializace prázdného pole
```

Do array už při vytvoření můžeme nahrát nějaké hodnoty

```JS
const brainrot = ["skibidi", "Fanum Tax", "Ohio"]; // inicializace pole se 3 prvky
```

Všimněte si, že jednotlivé prvky pole jsou oddělené čárkami

## Přístup k prvkům

Každý prvek má svůj vlastní index, tím je pozice na které se prvek právě nachází.

Co je velmi důležité je to, že indexujeme od `0`, tudíž první prvek `skibidi` má index `0` a druhý prvek `Fanum Tax` má index `1`.

### Vypsání prvků

```JS
console.log(brainrot[0]); // Program vypíše skibidi
console.log(brainrot[1]); // Program vypíše Fanum Tax
console.log(brainrot[2]); // Program vypíše Ohio
```

### Změna hodnoty prvků

```JS
brainrot[0] = "Rizz" // První prvek skibidi nahradí Rizz
```

### Vypsání celého pole

Pole můžeme vypsat pomocí jednoduchého for cyklu. Cyklus budeme opakovat tolikrát, kolik je prvků v daném poli. K tomu nám může pomoct vlastnost `array.length`, která nám zjistí počet prvků v daném poli.

```JS
for(let i = 0; i < brainrot.length; i++){
    console.log(brairot[i]);
}
```

Alternativou pro standartní cyklus for je použít cyklus for...of.
Ten funguje tak, že každý prvek má nějaké pojmenování, které definujeme. Výhodou je, že můžeme přeskočit inicializační část a inkrementační část cyklu.

```JS
for(let polozka of skibidi){
    console.log(polozka);
}
```

Pro první iteraci cyklu `polozka` = `skibidi[0]`, pro druhou iteraci `polozka` = `skibidi[1]` atd.

## Datové typy

Jedno pole může obsahovat více datových typů.

```JS
const pole = ["text", 5, true, null]; // Array obsahuje text, číslo, bool hodnotu a null hodnotu
```

## Array metody

Metody, které změní stav array.

### push

Přidá novou položku na konec arraye.

```JS
const brainrot = ["skibidi", "Fanum Tax", "Ohio"];

brainrot.push("Sigma"); // ["skibidi", "Fanum Tax", "Ohio", "Sigma"]
```

Můžeme vložit hodnotu nějaké proměnné do pole.

### pop

Vyhodí položku z arraye, která je na poslední pozici.

```JS
const brainrot = ["skibidi", "Fanum Tax", "Ohio"];

brainrot.pop(); // ["skibidi", "Fanum Tax"]
```

Vyhozenou hodnotu můžeme uložit do proměnné, např. `nejhorsiFraze = brainrot.pop()`.

### unshift

Přidá novou položku na začátek arraye.

```JS
const brainrot = ["skibidi", "Fanum Tax", "Ohio"];

brairot.unshift("Grimace Shake"); // ["Grimace Shake" ,"skibidi", "Fanum Tax", "Ohio"]
```

Znovu můžeme do pole vložit hodnotu nějaké proměnné.

### shift

Odebere první položku z arraye.

```JS
const brainrot = ["Skibidi", "Fanum Tax", "Ohio"];

brainrot.shift(); // ["Fanum Tax", "Ohio"]
```

Opět můžeme vyhozenou hodnotu uložit do proměnné.

### splice

Splice se řadí mezi složitější metody a má více funkcí. Pomocí této metody můžeme nahrazovat, vyhazovat a nebo dosazovat na konkrétní místa v arrayi.

```JS
array.splice(z jakého místa (index), kolik věcí nahrazujeme, čím to nahrazujeme)
```

První příklad:

```JS
const brainrot = ["Skibidi", "Fanum Tax", "Ohio"];

brainrot.splice(1, 0, "Alfa"); // z místa s indexem 1 (druhá pozice) vyhoď 0 položek a dosaď tam Alfa
// Výsledek bude ["Skibidi", "Alfa", "Fanum Tax", "Ohio"]
```

Druhý příklad:

```JS
const brainrot = ["Skibidi", "Fanum Tax", "Ohio"];

brainrot.splice(0, 2, "Alfa"); // z místa s indexem 0 (první pozice) vyhoď 2 položky a dosaď tam Alfa
// Výsledek bude ["Alfa", "Ohio"]
```

Pomocí splice můžeme jenom vyhazovat hodnoty bez jejich nahrazování, např. `array.splice(2, 1)` vyhodí 1 položku z místa s indexem 2.

Můžeme použít metodu `toSpliced()`, která vytvoří kopii pole a původní nijak nezmění `kopie = brainrot.toSpliced(2, 1)`.

### sort

Seřadí položky v arrayi vzestupně nebo podle abecedy.

```JS
const brainrot = ["Skibidi", "Fanum Tax", "Ohio"];

brainrot.sort(); // ["Fanum Tax", "Ohio", "Skibidi"]
```

Jako u minulé metody můžeme uložit kopii seřazeného pole do nové proměnné pomocí `array.toSorted()` a staré pole se nezmění.

Bohužel neexistuje metoda, která by nám seřadila položky v poli sestupně, ale existuje způsob, jak to můžeme provést.

### reverse

Otočí pořadí položek v arrayi.

```JS
const brainrot = ["Skibidi", "Fanum Tax", "Ohio"];

brainrot.reverse(); // ["Ohio", "Fanum Tax", "skibidi"]
```

Nyní by nám tedy mělo dojít, jak seřadit všechny položky v poli sestupně.
Seřadíme vše vzestupně a pak to jednoduše otočíme.

```JS
const brainrot = ["Skibidi", "Fanum Tax", "Ohio"];

brainrot.sort();
brainrot.reverse();
```

Opět můžeme kopii pole uložit do jiné proměnné bez změny původního pole pomocí `array.toReversed()`.

### indexOf

Vrátí index hledané hodnoty.

```JS
const brainrot = ["Skibidi", "Fanum Tax", "Ohio"];

console.log(brainrot.indexOf("Fanum Tax")); // Vypíše 1
```

V případě, že hodnota není nalezena, program vypíše hodnotu `-1`.

### includes

Zkontroluje, zda array obsahuje zadanou hodnotu.

```JS
const brainrot = ["Skibidi", "Fanum Tax", "Ohio"];

console.log(brainrot.includes("Ohio")); // Vypíše true
// V opačném případě vypisuje false
```

### join

Vytvoří string ze všech položek v arrayi.

```JS
const brainrot = ["Skibidi", "Fanum Tax", "Ohio"];

const zakazanaSlova = brainrot.join();
console.log(zakazanaSlova) // Vypíše Skibidi,Fanum Tax,Ohio
```

Do závorky můžeme uvést jiný znak , který bude spojovat jednotlivé položky, např. `console.log(brainrot.join(-))` vypíše `Skibidi-Fanum Tax-Ohio`
