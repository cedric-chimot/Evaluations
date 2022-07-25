document.getElementById("execute").addEventListener("click", evenement);

function evenement() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    document.getElementById("resultat").innerHTML = `Bonjour, je m'appelle ${prenom} ${nom}.<br>`;
    document.getElementById("date").innerHTML = `Aujourd'hui nous sommes le : `
    document.getElementById("date_jour").innerHTML = Date();
}