<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="agios PREND_LA_VALEUR 0.15" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2lignes="" F2defaut="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" totalBoucles="5000000" totalAffichages="1000" nbDecimales="8" epaisseurPoint="2" epaisseurLigne="2" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#agios" algoitem="agios EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#retrait" algoitem="retrait EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#dépôt" algoitem="dépôt EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#intérêts" algoitem="intérêts EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#solde_banque" algoitem="solde_banque EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#solde_restant" algoitem="solde_restant EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#solde_intérêts" algoitem="solde_intérêts EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#solde_banque#380#pasliste" algoitem="solde_banque PREND_LA_VALEUR 380"/>
        <item code="5#agios#0.15#pasliste" algoitem="agios PREND_LA_VALEUR 0.15"/>
        <item code="3#solde_banque#0#pasliste" algoitem="AFFICHER solde_banque"/>
        <item code="4# €#1" algoitem="AFFICHER &quot; €&quot;"/>
        <item code="2#retrait#pasliste" algoitem="LIRE retrait"/>
        <item code="2#dépôt#pasliste" algoitem="LIRE dépôt"/>
        <item code="5#solde_restant#solde_banque+dépôt-retrait#pasliste" algoitem="solde_restant PREND_LA_VALEUR solde_banque+dépôt-retrait"/>
        <item code="6#solde_restant>0" algoitem="SI (solde_restant>0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Votre compte est créditeur de : #1" algoitem="AFFICHER &quot;Votre compte est créditeur de : &quot;"/>
            <item code="3#solde_restant#0#pasliste" algoitem="AFFICHER solde_restant"/>
            <item code="4# €#1" algoitem="AFFICHER &quot; €&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="5#intérêts#solde_restant*agios#pasliste" algoitem="intérêts PREND_LA_VALEUR solde_restant*agios"/>
                <item code="4#agios : #0" algoitem="AFFICHER &quot;agios : &quot;"/>
                <item code="3#intérêts#0#pasliste" algoitem="AFFICHER intérêts"/>
                <item code="4# €#1" algoitem="AFFICHER &quot; €&quot;"/>
                <item code="4#Votre solde est débiteur de : #1" algoitem="AFFICHER &quot;Votre solde est débiteur de : &quot;"/>
                <item code="5#solde_intérêts#solde_restant+intérêts#pasliste" algoitem="solde_intérêts PREND_LA_VALEUR solde_restant+intérêts"/>
                <item code="3#solde_intérêts#0#pasliste" algoitem="AFFICHER solde_intérêts"/>
                <item code="4# €#1" algoitem="AFFICHER &quot; €&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
