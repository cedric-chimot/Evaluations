document.body.firstElementChild.innerHTML = "Rick Asley - Never gonna give you up";

const coupl = document.getElementsByClassName("couplet");

for (i = 0; i < coupl.length; i++) {
    coupl[i].removeChild(coupl[i].firstChild);
    coupl[i].removeChild(coupl[i].firstElementChild);
}

const refrain = document.getElementsByClassName("couplet refrain");

for (let x = 0; x < refrain.length; x++) {
    const refrainChildren = refrain[x].childNodes;
    const refrainNumberChildren = Math.round(refrainChildren.length / 2);

    for (let y = 0; y < refrainNumberChildren; y += 2) {
        //let child = refrainChildren[i];

        for (let i = 0; i < 2; i++) {
            console.log(y);
            refrain[x].removeChild(refrainChildren[y]);
        }
    }
}

const erreur = document.getElementById("erreur");
erreur.remove("erreur");

const footer = document.createElement("footer");
footer.innerText = "© Copyright 2020 - Nom";
document.body.appendChild(footer);
