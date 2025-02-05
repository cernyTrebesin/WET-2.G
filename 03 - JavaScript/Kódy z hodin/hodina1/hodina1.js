console.log("Hello World!") //Výpis do konzole


// komentář na řádek
/*
    Komentář na více řádků
*/


/*
let promenna; // definice proměnné pomocí let
promenna = 5; // přidání hodnoty do proměnné
console.log(promenna); // vypsánjí hodnoty v proměnné
promenna = 9; // změna hodnoty v proměnné
console.log(promenna); // vypsání nové hodnoty

let promenna2 = 7; // definice proměnné a přidání hodnoty na jednom řádku
*/

const cislo = 5;
// cislo = 9;  Tento řádek vyhodí chybu
console.log(cislo);


var nepouzivat = 5; // var je zastaralý, používat!!!
nepouzivat = 3;

// datové typy

let celeCislo = 420; // celočíselná proměnná int
let desetineCislo = 3.14; // desetinné číslo float
let text = "skibidi";  // proměnná s textem string
let chillGuy = true;  // proměnná boolean, může nabýt 2 hodnot (true/false)

let text1 = "Low";
let text2 = "Taper";
let text3 = "Fade";

console.log(text1 + " " + text2 + " " + text3); // spojování textů pomocí +
console.log(`${text1} ${text2} ${text3}`);  //spojování pomocí interpolace ($ alt gr + ů), ({} alt gr + b), (`` alt gr + ý)

let velkyText = text1 + " " + text2 + " " + text3;

let a = 5; // založení celočíselné proměnné
let b = 12;
let c = a + b; // sčítání
c = a - b; //  odečítání
c = a / b; // děleno
c = a * b; // násobení
c = b % a; // modulo (zbytek po dělení)
//console.log(c);


/*
c = a + text1;
c = a - text1;
console.log(c);
*/


console.log((5 + 5) * 10);