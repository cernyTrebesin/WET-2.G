# Funkce

Funkce v JS umožňují si definovat nějaký kód a později ho znovu neomezeně použít. Funkce zabraňuje zbytečnému opakování. Říká se, že když v kódu se nějaká část opakuje dvakrát, měla by tato část být definována funkcí.

## Definice funkce a volání funkce

Funkci můžeme definovat pomocí slovíčka `function()`. Základní funkce musí mít i k sobě definované jméno.

```JavaScript
function nazevFunkce(){
    // blok kódu, který funkce bude provádět
}
```

K tomu aby se funkce provedla jí musíme "zavolat", zavolá se jednoduše výpisem jména funkce s kulatými závorky.

```JavaScript
nazevFunkce()
```

## Funkce s parametry

Do závorek u názvu funkce se píší parametry (hodnoty), které funkci předáváme a funkce s nimi nadále pracuje.

```JavaScript
function pozdrav(jmeno){
    console.log("Ahoj " + jmeno + "!")
}

pozdrav("Spytihněv") // Výstup bude "Ahoj spyptihněv!"
```

Funkci můžeme i předávat hodnoty v proměnných, jejich jména nemusí být stejná.

```JavaScript
function pozdrav(jmeno){
    console.log("Ahoj " + jmeno + "!")
}

name = "Spytihněv"
pozdrav(name) // Výstup bude "Ahoj spyptihněv!"
```

Funkce může a nemusí přijímat parametry.

## Return

Return nám umožní vrátit nějakou hodnotu z funkce a pracovat s ní. Return také ukončuje funkci.

```JavaScript
function scitani(a, b){
    return a + b // funkce vrátí součet 2 čísel
}
```

Pokud funkci zavoláme "jen tak", nic se nestane. Ale hodnotu, kterou funkce vrací, můžeme např. vypsat nebo uložit do proměnné.

```JavaScript
console.log(scitani(5,2)) // Program vypíše výsledek funkce "7"
let soucet = scitani(10,4) // Program přiřadí do proměnné "soucet" hodnotu 14
```

## Anonymní funkce
