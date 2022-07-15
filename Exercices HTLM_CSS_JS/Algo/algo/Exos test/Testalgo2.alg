<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="C PREND_LA_VALEUR B-A"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2defaut="" F2etat="inactif" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" epaisseurLigne="2" epaisseurPoint="2" nbDecimales="8" totalBoucles="5000000" totalAffichages="1000" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#A" algoitem="A EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#B" algoitem="B EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#C" algoitem="C EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#A#5#pasliste" algoitem="A PREND_LA_VALEUR 5"/>
        <item code="5#B#3#pasliste" algoitem="B PREND_LA_VALEUR 3"/>
        <item code="5#C#A+B#pasliste" algoitem="C PREND_LA_VALEUR A+B"/>
        <item code="5#A#2#pasliste" algoitem="A PREND_LA_VALEUR 2"/>
        <item code="5#C#B-A#pasliste" algoitem="C PREND_LA_VALEUR B-A"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
