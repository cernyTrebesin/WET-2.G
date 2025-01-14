# Práce s HTML dokumentem

## Označení HTML prvku v JavaScriptu

Abychom mohli editovat HTML prvek pomocí JS, musíme si daný prvek nejdříve označit

Máme 2 možnosti jak v JS označit konkrétní prvek v HTML

### querySelector

Použitím `document.querySelector("selektor")` můžeme označit HTML prvek pomocí id ("#nazev"), class (".nazev") nebo elementárního selektoru ("nazev")
Pozor na použití uvozovek

```JavaScript
// označení textu pomocí id text
let text = document.querySelector("#text")
```

### getElementByID

`document.getElementByID("id")` funguje podobně jako querySelector, ale pouze na identifikátory

V uvozovkách není nutnost použít `#`

```JavaScript
// označení textu pomocí id text
let text = document.getElementByID("text")
```

Nezapomeňte, že u daného elementu v HTML musí být definován idetifikátor/třída

```HTML
<h1 id="text">Nadpis 1</h1>
```

Název proměnné nemusí odpovídat názvu selektoru!

---

## Upravování již zvoleného prvku

### innerText

innerText mění text v prvku.

HTML:

```HTML
<h1 id="text">Proč je ICT můj nejoblíbenější předmět:</h1>
```

JavaScript:

```JavaScript
let mujText = querySelector("#text");
mujText.innerText = "Proč je AGP můj nejoblíbenější předmět:"
```

Tento kód změnil text `Proč je ICT můj nejoblíbenější předmět:` na `Proč je AGP můj nejoblíbenější předmět:`

---

### style

Pomocí style můžeme upravovat nějakou CSS vlastnost daného prvku

Syntaxe: `promenna.style.vlastnost = "hodnota"`

```JavaScript
// Upravení barvy textu na růžovou
mujText.style.color = "pink"
```

---

### value

Pomocí value mohu získat vstup od uživatele pomocí formulářového pole

```JavaScript
// nejdříve si musím propojit prvek s proměnnou
let vstup = document.querySelector("#input")
// poté mohu přiřadit do nové proměnné hodnotu z formuláře
let textInputu = vstup.value
// s touto hodnotou mohu nadále pracovat a třeba ji někde vypsat
mujText.innerText = input.value


// můžeme přeskočit první krok a rovnou přiřadit text z formuláře do proměnné
// nebudeme ale mít proměnnou, ve které bude odkaz na daný formulář
let textInputu = document.querySelector("#input").value
```

Jak tyto data odeslat, aby je program dokázal využít si ukážeme později
