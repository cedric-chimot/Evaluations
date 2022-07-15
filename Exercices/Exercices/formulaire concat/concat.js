function concate() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let result = nom.concat(" ", prenom);
    
    document.getElementById("resultat").value = result;
}