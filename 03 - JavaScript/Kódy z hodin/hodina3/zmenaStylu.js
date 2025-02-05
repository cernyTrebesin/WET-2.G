let nadpis1 = document.querySelector("#nadpis1");
let odst = document.querySelector("#odstavec");
let nadpis2 = document.querySelector("#nadpis2");

function upravNadpis(){
    nadpis1.style.color = "orange";
    nadpis1.style.backgroundColor = "yellow";
    nadpis1.style.fontSize = "50px"
}

//upravNadpis();

function upravText(prvek){
    prvek.style.color = "red";
    prvek.style.backgroundColor = "aqua";
    prvek.style.fontSize = "80px"
}

upravText(nadpis2);