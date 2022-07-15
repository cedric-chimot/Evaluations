<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;m²&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2defaut="" F2etat="inactif" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" epaisseurLigne="2" epaisseurPoint="2" nbDecimales="8" totalBoucles="5000000" totalAffichages="1000" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#P" algoitem="P EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#rayon" algoitem="rayon EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Surface" algoitem="Surface EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#rayon#pasliste" algoitem="LIRE rayon"/>
        <item code="5#P#Math.PI#pasliste" algoitem="P PREND_LA_VALEUR Math.PI"/>
        <item code="5#Surface#P*(rayon*rayon)#pasliste" algoitem="Surface PREND_LA_VALEUR P*(rayon*rayon)"/>
        <item code="4#La surface d'un cercle est de :#0" algoitem="AFFICHER &quot;La surface d'un cercle est de :&quot;"/>
        <item code="3#Surface#0#pasliste" algoitem="AFFICHER Surface"/>
        <item code="4#m²#0" algoitem="AFFICHER &quot;m²&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
