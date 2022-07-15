var retrait;
var credit = 0;
var solde = 800;
var reponse;
var depot;
var virement;
var annuler;
var menu = "";

document.write("Votre solde est de : ", solde, " €");
var menu = prompt("Que souhaitez-vous faire ?");
document.write("</br></br>");

switch (menu) {

    case "retrait":

        var retrait = prompt("Combien souhaitez-vous retirer ?");
        
        if (solde < retrait) {
            document.write("Provisions insuffisantes !", "</br></br>");
            document.write("Merci de votre visite et à bientôt dans notre établissement");
            break;
        }

        else {
            var solde = (solde - retrait);
            document.write("Vous avez retirer ", retrait, " €", "</br></br>");
            document.write("Votre nouveau solde est de : ", solde, " €", "</br></br>");
            document.write("Merci de votre visite et à bientôt dans notre établissement");
            break;
        }

    case "depot":
        var depot = prompt("Combien souhaitez-vous déposer ?");
        document.write("Vous venez de déposer : ", depot, " €", "</br></br>");
        var solde = (parseInt(solde) + parseInt(depot));
        document.write("Votre nouveau solde est de : ", solde, " €", "</br></br>");
        document.write("Merci de votre visite et à bientôt dans notre établissement");
        break;

    case "virement":
        var virement = prompt("Combien souhaitez-vous virer ?");
        document.write("Vous venez d'effectuer un virement de ", virement, " € ", "sur le compte X", "</br></br>");
        var solde = (solde - virement);
        document.write("Votre solde après virement est de : ", solde, " €", "</br></br>");
        document.write("Merci de votre visite et à bientôt dans notre établissement");
        break;

    case "annuler":
        document.write("Merci de votre visite et à bientôt dans notre établissement");
        break;
}