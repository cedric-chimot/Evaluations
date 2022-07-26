//ajouter les données au localStorage
localStorage.setItem("nom", "Chimot");
localStorage.setItem("prenom", "Cédric");

//récupérer les données
let nom = localStorage.getItem("nom");
let prenom = localStorage.getItem("prenom");

//afficher les données dans le document
document.getElementById("textbox").innerHTML = nom + " " + prenom;