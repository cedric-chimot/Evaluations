<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="Surface PREND_LA_VALEUR Longueur*Largeur"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2defaut="" F2etat="inactif" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" epaisseurLigne="2" epaisseurPoint="2" nbDecimales="8" totalBoucles="5000000" totalAffichages="1000" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Longueur" algoitem="Longueur EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Largeur" algoitem="Largeur EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Surface" algoitem="Surface EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#Longueur#150#pasliste" algoitem="Longueur PREND_LA_VALEUR 150"/>
        <item code="5#Largeur#109#pasliste" algoitem="Largeur PREND_LA_VALEUR 109"/>
        <item code="5#Surface#Longueur*Largeur#pasliste" algoitem="Surface PREND_LA_VALEUR Longueur*Largeur"/>
        <item code="3#Surface#0#pasliste" algoitem="AFFICHER Surface"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
