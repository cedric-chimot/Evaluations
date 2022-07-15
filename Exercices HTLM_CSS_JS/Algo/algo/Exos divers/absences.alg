<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="E5 EST_DU_TYPE CHAINE" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2lignes="" F2para="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurPoint="2" arrondiAuto="vrai" maxBoucle="500000" nbDecimales="8" totalBoucles="5000000" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#choix2#Choix" algoitem="FONCTION choix2(Choix)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION"/>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="6#Choix==1" algoitem="SI (Choix==1) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#Présent#1" algoitem="AFFICHER &quot;Présent&quot;"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="6#Choix==2" algoitem="SI (Choix==2) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#Absent#1" algoitem="AFFICHER &quot;Absent&quot;"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Présent" algoitem="Présent EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Absent" algoitem="Absent EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Choix" algoitem="Choix EST_DU_TYPE NOMBRE"/>
        <item code="1#CHAINE#E1" algoitem="E1 EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#E2" algoitem="E2 EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#E3" algoitem="E3 EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#E4" algoitem="E4 EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#E5" algoitem="E5 EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#Choix#-1#pasliste" algoitem="Choix PREND_LA_VALEUR -1"/>
        <item code="5#E1#&quot;Cédric&quot;#pasliste" algoitem="E1 PREND_LA_VALEUR &quot;Cédric&quot;"/>
        <item code="5#E2#&quot;Jimmy&quot;#pasliste" algoitem="E2 PREND_LA_VALEUR &quot;Jimmy&quot;"/>
        <item code="5#E3#&quot;Perrine&quot;#pasliste" algoitem="E3 PREND_LA_VALEUR &quot;Perrine&quot;"/>
        <item code="5#E4#&quot;Stéphane&quot;#pasliste" algoitem="E4 PREND_LA_VALEUR &quot;Stéphane&quot;"/>
        <item code="5#E5#&quot;Greg&quot;#pasliste" algoitem="E5 PREND_LA_VALEUR &quot;Greg&quot;"/>
        <item code="15#Choix!=0" algoitem="TANT_QUE (Choix!=0) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="3#E1#1#pasliste" algoitem="AFFICHER E1"/>
            <item code="2#Choix#pasliste" algoitem="LIRE Choix"/>
            <item code="206#choix2(Choix)" algoitem="APPELER_FONCTION choix2(Choix)"/>
            <item code="4# #1" algoitem="AFFICHER &quot; &quot;"/>
            <item code="4#------------------------------------------------------------------#1" algoitem="AFFICHER &quot;------------------------------------------------------------------&quot;"/>
            <item code="4#  #1" algoitem="AFFICHER &quot;  &quot;"/>
            <item code="3#E2#1#pasliste" algoitem="AFFICHER E2"/>
            <item code="2#Choix#pasliste" algoitem="LIRE Choix"/>
            <item code="206#choix2(Choix)" algoitem="APPELER_FONCTION choix2(Choix)"/>
            <item code="4# #1" algoitem="AFFICHER &quot; &quot;"/>
            <item code="4#------------------------------------------------------------------#1" algoitem="AFFICHER &quot;------------------------------------------------------------------&quot;"/>
            <item code="4#  #1" algoitem="AFFICHER &quot;  &quot;"/>
            <item code="3#E3#1#pasliste" algoitem="AFFICHER E3"/>
            <item code="2#Choix#pasliste" algoitem="LIRE Choix"/>
            <item code="206#choix2(Choix)" algoitem="APPELER_FONCTION choix2(Choix)"/>
            <item code="4# #1" algoitem="AFFICHER &quot; &quot;"/>
            <item code="4#------------------------------------------------------------------#1" algoitem="AFFICHER &quot;------------------------------------------------------------------&quot;"/>
            <item code="4#  #1" algoitem="AFFICHER &quot;  &quot;"/>
            <item code="3#E4#1#pasliste" algoitem="AFFICHER E4"/>
            <item code="2#Choix#pasliste" algoitem="LIRE Choix"/>
            <item code="206#choix2(Choix)" algoitem="APPELER_FONCTION choix2(Choix)"/>
            <item code="4# #1" algoitem="AFFICHER &quot; &quot;"/>
            <item code="4#------------------------------------------------------------------#1" algoitem="AFFICHER &quot;------------------------------------------------------------------&quot;"/>
            <item code="4#  #1" algoitem="AFFICHER &quot;  &quot;"/>
            <item code="3#E5#1#pasliste" algoitem="AFFICHER E5"/>
            <item code="2#Choix#pasliste" algoitem="LIRE Choix"/>
            <item code="206#choix2(Choix)" algoitem="APPELER_FONCTION choix2(Choix)"/>
            <item code="4# #1" algoitem="AFFICHER &quot; &quot;"/>
            <item code="4#------------------------------------------------------------------#1" algoitem="AFFICHER &quot;------------------------------------------------------------------&quot;"/>
            <item code="4#  #1" algoitem="AFFICHER &quot;  &quot;"/>
            <item code="5#Choix#0#pasliste" algoitem="Choix PREND_LA_VALEUR 0"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
