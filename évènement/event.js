const event = document.getElementById("event");
event.addEventListener("click", execute);
var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom")


function execute() {
    document.getElementById("executed") = `"Bonjour, je m'appelle" + ${nom} + ${prenom}` 
}