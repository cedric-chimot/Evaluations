//On va chercher les éléments du HTML par rapport aux "ID"
const box = document.querySelector("#box");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

function majCoordonnees(e) {
  pageX.innerText = e.pageX;            //renvoie la coordonnée horizontale du pointeur de la souris par rapport au document (page).
  pageY.innerText = e.pageY;            //renvoie la coordonnée verticale du pointeur de la souris par rapport au document (page).
}

//Ecoute le la fonction
box.addEventListener("mousemove", majCoordonnees, false);
box.addEventListener("mouseenter", majCoordonnees, false);
box.addEventListener("mouseleave", majCoordonnees, false);
