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
        // let child = refrainChildren[i];

        for (let i = 0; i < 2; i++) {
            refrain[x].removeChild(refrainChildren[y]);
        }
    }
}

const erreur = document.getElementById("erreur");
erreur.remove("erreur");

const footer = document.createElement("footer");
footer.innerText = "© Copyright 2020 - Nom";
document.body.appendChild(footer);

//suppression des doublons avec convertion en tableau

/*var refrain = [
    "Never gonna give you up",
    "Never gonna give you up",
    "Never gonna give you up",
    "Never gonna let you down",
    "Never gonna let you down",
    "Never gonna run around and desert you",
    "Never gonna run around and desert you",
    "Never gonna make you cry",
    "Never gonna make you cry",
    "Never gonna say goodbye",
    "Never gonna say goodbye",
    "Never gonna tell a lie and hurt you",
    "Never gonna tell a lie and hurt you",
  ];
  
  function filterArray(refrain) {
    var found = {};
    var out = refrain.filter(function (e) {
      return found.hasOwnProperty(e) ? false : (found[e] = true);
    });
    return out;
  }
  
  const outputArray = filterArray(refrain);
  console.log("Original Array",refrain);
  console.log("Filtered Array",outputArray);*/