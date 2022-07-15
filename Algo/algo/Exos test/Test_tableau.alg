<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="POUR itération ALLANT_DE 0 A Nbetudiants-1" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2lignes="" F2defaut="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" totalBoucles="5000000" totalAffichages="1000" nbDecimales="8" epaisseurPoint="2" epaisseurLigne="2" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#itération" algoitem="itération EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Nbetudiants" algoitem="Nbetudiants EST_DU_TYPE NOMBRE"/>
        <item code="1#LISTE#tableau" algoitem="tableau EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#somme" algoitem="somme EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#moyenne" algoitem="moyenne EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#Nbetudiants#pasliste" algoitem="LIRE Nbetudiants"/>
        <item code="12#itération#0#Nbetudiants-1" algoitem="POUR itération ALLANT_DE 0 A Nbetudiants-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="2#tableau#itération" algoitem="LIRE tableau[itération]"/>
            <item code="5#somme#somme+tableau[itération]#pasliste" algoitem="somme PREND_LA_VALEUR somme+tableau[itération]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="5#moyenne#somme / Nbetudiants#pasliste" algoitem="moyenne PREND_LA_VALEUR somme / Nbetudiants"/>
        <item code="4#La moyenne est de : #0" algoitem="AFFICHER &quot;La moyenne est de : &quot;"/>
        <item code="3#moyenne#0#pasliste" algoitem="AFFICHER moyenne"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
