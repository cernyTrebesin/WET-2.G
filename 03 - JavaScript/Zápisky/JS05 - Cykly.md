# Cykly

Cykus je nějaká část kódu, která se opakuje neustále, dokud je splněná nějaká podmínka. Cyklem si tedy můžeme pomoct ke zkrácení kódu, místo toho, abychom vypisovali velké množství čísel, si můžeme pomoci cyklem

## Typy cyklů

Cykly můžeme rozlišovat podle 2 kritérií:

-   Cyklus s podmínkou na začátku/konci
-   Cyklus s/bez daného počtu opakování

## Cyklus while

Cyklus while je cyklus bez daného počtu opakování a s podmínkou na začátku

```JS
while(podminka){
    // kód co se bude opakovat, dokud je splněná podmínka
}
```

### Příklad

Následující kód vypíše čísla od 1 do 10

```JS
let i = 1
while(i <= 10){
    console.log(i);
    i++
}
```

### Zacyklení programu

Při práci s cykly je důležité aby se mi nezacyklil, neboli aby se cyklus vykonával do nekonečna

```JS
let i = 1
while(i <= 10){
    console.log(i);
    // hodnota i se nikdy nezmění, tudíž podmínka bude navždy splněna
}
```

## Cyklus do while

Cyklus do while je velmi podobnýn cyklu while s rozdílem, že podmínka je cyklu je na konci, neboli se provede na konci každé iterace cyklu

```JS
do{
    // kód co se bude opakovat, dokud je splněná podmínka
}while(podminka)
```

Je teda snadné odvodit, že tělo cyklu se provede VŽDY alespoň jednou

### Příklad

```JS
let i = 1
do{
    console.log(i);
    i++
}while(i <= 10)
```

## Cyklus for

Posledním typem cyklů je cyklus for. Tento cyklus má podmínku na začátku a má daný počet opakování.

```JS
for (inicializace; podmínka; inkrementace / dekrementace) {
    // kód co se bude opakovat, dokud je splněná podmínka
}
```

Můžeme si povšimnout, že v závorkách nyní využíváme 3 věci namísto jedné

-   inicializace: V této části si stanovíme proměnnou, se kterou poté v cyklu pracujeme. Proměnná se standartně jmenuje `i`.
-   podmínka: Jedná se o jednoduchou podmínku, podobně jako v předchozích cyklech. V podmínce se většinou vyskytuje proměnná, kterou jsme si stanovili v inicializační části
-   Určuje, o jakou hodnotu budeme zvyšovat/snižovat inicializační proměnnou

### Příklad

```JS
for(let i = 1; i <= 10; i++){
    console.log(i);
}
```

Opět pozor na zacyklení a raději si zkontrolujte podmínku a inkrementaci

## Kdy použít while a kdy for?

Obecně platí, že `for` bychom měli používat vždy, když známe určitý počet, kolikrát se daný cyklus bude opakovat nebo když víme, že potřebuje nějakou hodnotu, která se bude měnit s každou iterací cyklu. `While` tedy budeme používat, když nevíme kolikrát se bude opakovat daný cyklus
