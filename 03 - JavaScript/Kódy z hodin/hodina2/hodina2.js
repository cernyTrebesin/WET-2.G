let text = document.querySelector("#text");
// let cokoliv = document.getElementById("text") alternativní zápis
text.innerText = "Webové technologie je můj nejoblíbenější předmět"

text.style.color = "orange";

let novyDiv = document.createElement("div");
novyDiv.innerText = "Fyzika je alright";
novyDiv.style.color = "pink";
text.append(novyDiv);

