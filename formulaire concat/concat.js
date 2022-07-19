/*function concate() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let result = nom.concat(" ", prenom);
    
    document.getElementById("resultat").value = result;
}*/

concate[2].addEventListener("click", () => {
    concate[3].value = `${concate[0].value} ${concate[1].value}`
});