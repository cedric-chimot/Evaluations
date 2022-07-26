//ajouter les données au localStorage
localStorage.setItem("nom", "Chimot");
localStorage.setItem("prenom", "Cédric");

//récupérer les données
let nom = localStorage.getItem("nom");
let prenom = localStorage.getItem("prenom");

//afficher les données dans le document
document.getElementById("textbox").value = nom + " " + prenom;



/*var textbox = document.getElementById('textbox');
var button = document.getElementById('button');

button.addEventListener('click', function() {
    localStorage.name = textbox.value;
    document.getElementById("resultat").innerHTML = localStorage.name;
});*/
