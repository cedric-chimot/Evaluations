<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;Votre moyenne est de : &quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2defaut="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" arrondiAuto="vrai" totalBoucles="5000000" maxBoucle="500000" epaisseurLigne="2" nbDecimales="8" epaisseurPoint="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="notes EST_DU_TYPE NOMBRE" code="1#NOMBRE#notes"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="tableau EST_DU_TYPE LISTE" code="1#LISTE#tableau"/>
        <item algoitem="som EST_DU_TYPE NOMBRE" code="1#NOMBRE#som"/>
        <item algoitem="moy EST_DU_TYPE NOMBRE" code="1#NOMBRE#moy"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE notes" code="2#notes#pasliste"/>
        <item algoitem="POUR i ALLANT_DE 0 A notes-1" code="12#i#0#notes-1">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="LIRE tableau[i]" code="2#tableau#i"/>
            <item algoitem="som PREND_LA_VALEUR som+tableau[i]" code="5#som#som+tableau[i]#pasliste"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="moy PREND_LA_VALEUR ALGOBOX_ARRONDIR((som/notes),2)" code="5#moy#ALGOBOX_ARRONDIR((som/notes),2)#pasliste"/>
        <item algoitem="AFFICHER &quot;Votre moyenne est de : &quot;" code="4#Votre moyenne est de : #0"/>
        <item algoitem="AFFICHER moy" code="3#moy#0#pasliste"/>
        <item algoitem="AFFICHER &quot;/20&quot;" code="4#/20#1"/>
        <item algoitem="AFFICHER &quot;Vous êtes : &quot;" code="4#Vous êtes : #0"/>
        <item algoitem="SI (moy >= 10) ALORS" code="6#moy >= 10">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Admis, &quot;" code="4#Admis, #0"/>
            <item algoitem="AFFICHER &quot;Félicitation&quot;" code="4#Félicitation#1"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="AFFICHER &quot;Recalé, &quot;" code="4#Recalé, #0"/>
                <item algoitem="AFFICHER &quot;Veuillez retenter votre chance&quot;" code="4#Veuillez retenter votre chance#1"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
        <item algoitem="AFFICHER &quot;Mention : &quot;" code="4#Mention : #0"/>
        <item algoitem="SI (moy &lt; 12) ALORS" code="6#moy &lt; 12">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Aucune&quot;" code="4#Aucune#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="SI (moy >= 12 et moy &lt; 14) ALORS" code="6#moy >= 12 et moy &lt; 14">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="AFFICHER &quot;Assez-bien&quot;" code="4#Assez-bien#0"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="SI (moy >= 14 et moy &lt; 16) ALORS" code="6#moy >= 14 et moy &lt; 16">
                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                            <item algoitem="AFFICHER &quot;Bien&quot;" code="4#Bien#0"/>
                            <item algoitem="FIN_SI" code="8#finsi"/>
                            <item algoitem="SINON" code="9#sinon">
                                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                <item algoitem="AFFICHER &quot;Très-bien&quot;" code="4#Très-bien#0"/>
                                <item algoitem="FIN_SINON" code="11#finsinon"/>
                            </item>
                        </item>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
