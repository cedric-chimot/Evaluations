var etudiants = []
etudiants[0] = "Cédric"
etudiants[1] = " Perrine"
etudiants[2] = " Jimmy"
etudiants[3] = " Anthony"
etudiants[4] = " Outman"
etudiants[5] = " Gregory"
etudiants[6] = " Stéphane"
etudiants[7] = " Fred"
etudiants[8] = " Theo"
etudiants[9] = " Halim"
etudiants[10] = " Camille"
etudiants[11] = " Océane"
etudiants[12] = " Salomé"
etudiants[13] = " Zakaria"
etudiants[14] = " Benoît"
etudiants[15] = " Karim"

for (var i = 0 ; i < 15 ; i++) {
    document.write(etudiants[i]);
    
    if(i === 6){
        break;
    } 
}
