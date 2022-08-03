const openNav = document.querySelector(".icon1");
const fermerNav = document.querySelector(".fermer");
const menu = document.querySelector(".menu");

//"getBoundingClientRect" Renvoie la taille d'un élément et sa position par rapport à la fenêtre
const positionMenu = menu.getBoundingClientRect().left;

//Création de l'évènement ouvri/fermer pour le menu
openNav.addEventListener("click", e => {
    if(positionMenu < 0) {
        menu.classList.add("montrer");
    } 
})

fermerNav.addEventListener("click", e => {
    if(positionMenu < 0) {
        menu.classList.remove("montrer");
    } 
})