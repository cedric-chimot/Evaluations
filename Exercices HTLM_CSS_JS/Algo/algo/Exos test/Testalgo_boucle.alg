<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER nb"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2para="" F2etat="inactif" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" epaisseurPoint="2" epaisseurLigne="2" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="n EST_DU_TYPE NOMBRE" code="1#NOMBRE#n"/>
        <item algoitem="nb EST_DU_TYPE NOMBRE" code="1#NOMBRE#nb"/>
        <item algoitem="compteur EST_DU_TYPE NOMBRE" code="1#NOMBRE#compteur"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Entrer n &quot;" code="4#Entrer n #1"/>
        <item algoitem="LIRE n" code="2#n#pasliste"/>
        <item algoitem="nb PREND_LA_VALEUR 1" code="5#nb#1#pasliste"/>
        <item algoitem="AFFICHER nb" code="3#nb#1#pasliste"/>
        <item algoitem="POUR compteur ALLANT_DE 1 A n-1" code="12#compteur#1#n-1">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="nb PREND_LA_VALEUR nb+2" code="5#nb#nb+2#pasliste"/>
            <item algoitem="AFFICHER nb" code="3#nb#1#pasliste"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
