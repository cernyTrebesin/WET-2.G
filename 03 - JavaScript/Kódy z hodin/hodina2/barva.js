let text = document.querySelector("#text");

let odpoved = window.prompt("Zadej jestli chceš modrou nebo zelenou"); 

if (odpoved === "modrou"){
    text.style.color = "blue";
} else if (odpoved === "zelenou"){
    text.style.color = "green"
} else{
    alert("Zadal jsi špatnou barvu")
}
