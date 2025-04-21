let auta = ["Škoda", "Audi", "BMW"]; // založení pole
console.log(auta[0]); // Vypsání první položky z pole

auta.push("Volvo"); // přidání nové položky do pole
console.log(auta[3]); // vypsání nové položky

auta.pop(); // vyhození poslední položky z pole
console.log(auta) // Vypsání celého pole

auta.shift(); // vyhodí první věc z pole
console.log(auta); // Vypsání celého pole

auta.unshift("Tatra"); // Přidání nového prvku na nultý index
console.log(auta); // Vypsání nového pole

// auta.splice(z jakého místa, kolik věcí nahradit, čím to nahradit)
auta.splice(2, 0, "Fiat"); // přidání nové hodnoty na index 2
console.log(auta);

auta[2] = "Porsche" // přepsání hodnoty na indexu 2
console.log(auta);

auta.splice(2, 1); // odebrání hodnoty na indexu 2
console.log(auta);

auta.sort();
console.log(auta);

auta.reverse();
console.log(auta);