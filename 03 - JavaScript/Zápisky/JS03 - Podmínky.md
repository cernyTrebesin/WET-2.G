# Podmínky

_"Pokud něco platí, proveď nějaký kód"_

## Synatexe podmínek

K vytvoření podmínky v JS potřebuju slovíčko `if`, poté do kulatých závorek napíšu danou podmínku, která musí být splněna, aby byl vykonán nějaký blok kódu, který se píše mezi složené závorky `{ }`

```JavaScript
if(podmínka){
    // Blok kódu, který se provede
}
```

## Porovnávání v podmínkách

Pro porovnávání používáme následující znaky

-   `===` rovná se
-   `!==` nerovná se
-   `>` je větší než
-   `>=` je větší než nebo rovno
-   `<` je menší než
-   `<=` je menší než nebo rovno

Pomocí `===` můžeme porovnávat jak čísla tak i řetězce

V podmínce může být zapsána pouze jediná hodnota, např. `if(proměnná)`, je to zkrácený zápis pro `if(proměnná === true)`

### Příklad podmínky

```JavaScript
vstup = window.prompt("Zadej číslo")
if(vstup > 5){
    // Tato část je provedena pouze pokud je zadané číslo větší než 5
    alert("Zadané číslo je větší než 5")
}
```

## else if

Pomocí `else if()` můžeme rozšířit podmínku

```JavaScript
vstup = window.prompt("Zadej číslo")
if(vstup > 5){
    // Tato část je provedena pouze pokud je zadané číslo větší než 5
    alert("Zadané číslo je větší než 5")
}else if(vstup < 5){
    // Tato část je provedena pouze pokud je zadané číslo menší než 5
    alert("Zadané číslo je menší než 5")
}
```

Počet kolikrát `else if` můžeme použít není omezen

## else

Další případ rozšíření podmínky. Dá se přeložit jako _"v ostatních případech"_ a blok kódu je proveden, zda není splněná žádná z předchozích `if` a `else if` podmínek

```JavaScript
vstup = window.prompt("Zadej číslo")
if(vstup > 5){
    // Tato část je provedena pouze pokud je zadané číslo větší než 5
    alert("Zadané číslo je větší než 5")
}else if(vstup < 5){
    // Tato část je provedena pouze pokud je zadané číslo menší než 5
    alert("Zadané číslo je menší než 5")
}else{
    // Tato část je provedena pouze pokud je zadané číslo 5
    alert("Zadané číslo je 5")
}
```

## switch

V JavaScriptu se `switch` používá jako alternativa k `if-else`, pokud potřebujeme porovnat jednu hodnotu proti více možnostem. V případě, že do kódu potřebujeme napsat hodně podmínek, je lepší použít switch.

### Syntaxe switch

```JavaScript
switch (výraz) {
    case hodnota1:
        // Blok kódu, který se provede, pokud se výraz rovná hodnota1
        break;
    case hodnota2:
        // Blok kódu, který se provede, pokud se výraz rovná hodnota2
        break;
    default:
        // Blok kódu, který se provede, pokud žádná z hodnot neodpovídá
}
```

`break` ukončí provádění switch

`default` symbolizuje část kódu, která se vykoná, pokud neodpovídá žádná hodnota v case (nevyžaduje `break`)
