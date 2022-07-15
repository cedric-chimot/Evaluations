var canvas = document.getElementById("myCanvas");                               /*référence au html et variable canvas*/
var ctx = canvas.getContext("2d");                                              /*stockage du contexte de rendu 2d*/
var x = canvas.width / 2;                                                       /*variable x/y pour définir la position du cercle*/
var y = canvas.height - 30;
var ballRadius = 10;                                                            /*rayon du cercle dessiné*/
var dx = 2;                                                                     /*ajout de valeur à x/y pour que la balle bouge*/
var dy = -2;
var paddleHeight = 10;                                                          /*ajout de la raquette*/
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;   
var rightPressed = false;                                                       /*bouton de commande gauche ou droit enfoncé*/
var leftPressed = false;

/*variables pour stocker les infos des briques : L/H/Col/lignes*/
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

/*event listener pour gérer les mouvements de la raquette*/
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

/*gestion des évènements lors de l'appui des touches*/
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }

    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }

    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

/*dessin avec fonction simplifiée*/
/*ajout de la var ballRadius pour effet de collision direct*/
function drawBall() {
    ctx.beginPath();                                                            /*début chemin d'instruction*/
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);                                  /*coord. x/y, rayon, angle départ/fin, direction du dessin*/
    ctx.fillStyle = "#0095DD";                                                  /*stockage de couleur*/
    ctx.fill();                                                                 /*utilisation de la couleur stockée*/
    ctx.closePath();                                                            /*fin chemin d'instruction*/
}

/*definir la raquette pour frapper la balle*/
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);                           /*efface la trace laisser par la balle*/
    drawBall();
    drawPaddle();                                                               /*appel de la fonction pour la raquette*/

    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;                                                               /*rebond de la balle sur les bords gauche et droit*/
    }

    if (y + dy < ballRadius) {                                                  /*rebond de la balle sur le bord inférieur & */
        dy = -dy;                                                               /*inversion de la direction de la balle pour effet de limite zone de jeu*/            
    }
    
    else if(y + dy > canvas.height-ballRadius)
    {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }

        else {
        alert("GAME OVER");
        document.location.reload();                                             /*ajout d'un "Game over" si on dépasse la barre du bas*/
        }
    }

/*fonction pour déplacer la raquette*/
    if(rightPressed && paddleX < canvas.width-paddleWidth) {                    /*déplacement de 7 pixels à droite*/
        paddleX += 7;
    }

    else if(leftPressed && paddleX > 0) {                                       /*déplacement de 7 pixels à gauche*/
        paddleX -= 7;                                                      
    }
    
    x += dx;                                                                    /*mise à jour des variables x/y*/
    y += dy;
}

setInterval(draw, 10);                                                          /*Appel de la fonction"draw" toutes les 10 millisecondes*/
