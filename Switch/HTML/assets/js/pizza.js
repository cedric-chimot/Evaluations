let piz_bolo = 15;
let piz_chevre = 12;
let piz_ananas= 10.5;
let quantité = 1;
let com_bolo = (piz_bolo * quantité);
let com_chevre = (piz_chevre * quantité);
let com_ananas = (piz_ananas * quantité);

    if(bolo.checked){
        document.write("Vous avez choisi notre pizza Bolognaise", "<br></br>", "Total à payer : ");
        document.write(com_bolo);
        document.write(" €", "<br></br>", "Merci pour votre achat, à bientôt dans notre restaurant !");
    }

    else if(chèvre.checked){  
        document.write("Vous avez choisi notre pizza Chèvre-miel", "<br></br>", "Total à payer : ");
        document.write(com_chevre);
        document.write(" €", "<br></br>", "Merci pour votre achat, à bientôt dans notre restaurant !");
    }

    else if(ananas.checked){
        document.write("Vous avez choisi notre pizza Hawaïenne", "<br></br>", "Total à payer : ");
        document.write(com_ananas);
        document.write(" €", "<br></br>", "Merci pour votre achat, à bientôt dans notre restaurant !");
    }
