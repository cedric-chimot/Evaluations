function chaine() {
    let texte = "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip. lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip.";
    let search = document.getElementById("search").value;
    let reg = new RegExp((search), "g");
    //let res = texte.match(reg);
    //document.getElementById("occ").innerHTML = res;
    document.getElementById("origin").innerHTML = `Chaîne d'origine : ${texte} <br/>`;
    document.getElementById("myString").innerHTML ="Chaîne traitée : " + 
    texte.replace(reg, `<span style='background-color: red; color: white'>${search}</span>`) + "<br>" + "<br>";
}




//animate__tada => animation css

//utilisation de backtick pour appeler la variable