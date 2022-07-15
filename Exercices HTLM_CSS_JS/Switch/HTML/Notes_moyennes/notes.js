/*let tab = {Matière : "Histoire",Note : 13,Appréciation : "Bon travail"}
for(notes in tab){
    document.write(notes+" : "+tab[notes]);
    document.write("</br></br>");
}

let tab1 = {Matière : "Géographie",Note : 14,Appréciation :"Bon travail"}
for(notes in tab1){
    document.write(notes+" : "+tab1[notes]);
    document.write("</br></br>");
}

let tab2 = {Matière : "Mathématiques",Note : 18,Appréciation :"Excellent travail"}
for(notes in tab2){
    document.write(notes+" : "+tab2[notes]);
    document.write("</br></br>");
}

let tab3 = {Matière : "Sport",Note : 8.5,Appréciation : "Peu mieux faire"}
for(notes in tab3){
    document.write(notes+" : "+tab3[notes]);
    document.write("</br></br>");
}

let tab4 = {Matière : "SVT",Note : 7.5,Appréciation : "Passable"}
for(notes in tab4){
    document.write(notes+" : "+tab4[notes]);
    document.write("</br></br>");

}let tab5 = {Matière : "Anglais",Note : 14,Appréciation : "Bon travail"}
for(notes in tab5){
    document.write(notes+" : "+tab5[notes]);
    document.write("</br></br>");
}*/

//tableau par javascript

var i = 0;
var somme = 0;
var moyenne = 0;
var nb_notes = 0;
nb_notes = prompt("Entrez le nombre de notes :", "Nb de Notes");
nb_notes = parseInt(nb_notes);
notes = new Array(nb_notes);
for (i = 1; i <= nb_notes; i++) {

    note_i = prompt("Entrez la note");
    notes[i - 1] = parseInt(note_i);
    somme += notes[i - 1];
}
moyenne = (somme / nb_notes);
document.write("La moyenne est de : " + moyenne.toFixed(2), "/20");
document.write("</br></br>");

if (moyenne >= 10) {
    document.write("Admis, Félicitation !");
    document.write("</br></br>");
}

else {
    document.write("Recalé, revenez l'année prochaine !");
    document.write("</br></br>");
}

//calcul de moyenne

if (moyenne < 12) {
    document.write("Mention : Aucune", "</br></br>");
}

else if (moyenne >= 12 && moyenne < 14) {
    document.write("Mention : Assez-bien", "</br></br>");
}

else if (moyenne >= 14 && moyenne < 16) {
    document.write("Mention : Bien", "</br></br>");
}

else {
    document.write("Mention : Très bien", "</br></br>");
}

//attribution de mention avec if/else
