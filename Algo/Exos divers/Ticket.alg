<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="stock_boisson PREND_LA_VALEUR 10" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2" nbDecimales="8" arrondiAuto="vrai" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#prix_boisson" algoitem="prix_boisson EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#stock_boisson" algoitem="stock_boisson EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#prix_plat" algoitem="prix_plat EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#stock_plat" algoitem="stock_plat EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#prix_supp" algoitem="prix_supp EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#stock_supp" algoitem="stock_supp EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#totalHT" algoitem="totalHT EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#TVA" algoitem="TVA EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#totalTTC" algoitem="totalTTC EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#com_boisson" algoitem="com_boisson EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#com_plat" algoitem="com_plat EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#com_supplément" algoitem="com_supplément EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#montant_TVA" algoitem="montant_TVA EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#stock_boisson#10#pasliste" algoitem="stock_boisson PREND_LA_VALEUR 10"/>
        <item code="5#stock_plat#6#pasliste" algoitem="stock_plat PREND_LA_VALEUR 6"/>
        <item code="5#stock_supp#8#pasliste" algoitem="stock_supp PREND_LA_VALEUR 8"/>
        <item code="2#prix_boisson#pasliste" algoitem="LIRE prix_boisson"/>
        <item code="2#com_boisson#pasliste" algoitem="LIRE com_boisson"/>
        <item code="15#com_boisson>stock_boisson" algoitem="TANT_QUE (com_boisson>stock_boisson) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#stock insuffisant#1" algoitem="AFFICHER &quot;stock insuffisant&quot;"/>
            <item code="2#com_boisson#pasliste" algoitem="LIRE com_boisson"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="5#prix_boisson#prix_boisson*com_boisson#pasliste" algoitem="prix_boisson PREND_LA_VALEUR prix_boisson*com_boisson"/>
        <item code="3#prix_boisson#0#pasliste" algoitem="AFFICHER prix_boisson"/>
        <item code="2#prix_plat#pasliste" algoitem="LIRE prix_plat"/>
        <item code="2#com_plat#pasliste" algoitem="LIRE com_plat"/>
        <item code="15#com_plat>stock_plat" algoitem="TANT_QUE (com_plat>stock_plat) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#stock insuffisant#1" algoitem="AFFICHER &quot;stock insuffisant&quot;"/>
            <item code="2#com_plat#pasliste" algoitem="LIRE com_plat"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="5#prix_plat#prix_plat*com_plat#pasliste" algoitem="prix_plat PREND_LA_VALEUR prix_plat*com_plat"/>
        <item code="3#prix_plat#0#pasliste" algoitem="AFFICHER prix_plat"/>
        <item code="2#prix_supp#pasliste" algoitem="LIRE prix_supp"/>
        <item code="2#com_supplément#pasliste" algoitem="LIRE com_supplément"/>
        <item code="15#com_supplément>stock_supp" algoitem="TANT_QUE (com_supplément>stock_supp) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#stock insuffisant#1" algoitem="AFFICHER &quot;stock insuffisant&quot;"/>
            <item code="2#com_supplément#pasliste" algoitem="LIRE com_supplément"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="5#prix_supp#prix_supp*com_supplément#pasliste" algoitem="prix_supp PREND_LA_VALEUR prix_supp*com_supplément"/>
        <item code="5#totalTTC#prix_boisson+prix_plat+prix_supp#pasliste" algoitem="totalTTC PREND_LA_VALEUR prix_boisson+prix_plat+prix_supp"/>
        <item code="3#totalTTC#0#pasliste" algoitem="AFFICHER totalTTC"/>
        <item code="4#€ TTC#1" algoitem="AFFICHER &quot;€ TTC&quot;"/>
        <item code="5#TVA#0.1#pasliste" algoitem="TVA PREND_LA_VALEUR 0.1"/>
        <item code="5#totalHT#ALGOBOX_ARRONDIR((totalTTC/(1+TVA)),2)#pasliste" algoitem="totalHT PREND_LA_VALEUR ALGOBOX_ARRONDIR((totalTTC/(1+TVA)),2)"/>
        <item code="3#totalHT#0#pasliste" algoitem="AFFICHER totalHT"/>
        <item code="4#€ HT#1" algoitem="AFFICHER &quot;€ HT&quot;"/>
        <item code="5#montant_TVA#totalTTC-totalHT#pasliste" algoitem="montant_TVA PREND_LA_VALEUR totalTTC-totalHT"/>
        <item code="4#TVA: #0" algoitem="AFFICHER &quot;TVA: &quot;"/>
        <item code="3#montant_TVA#0#pasliste" algoitem="AFFICHER montant_TVA"/>
        <item code="4#€#1" algoitem="AFFICHER &quot;€&quot;"/>
        <item code="4#Reste en stock:#1" algoitem="AFFICHER &quot;Reste en stock:&quot;"/>
        <item code="4#Stock boissons:#0" algoitem="AFFICHER &quot;Stock boissons:&quot;"/>
        <item code="5#stock_boisson#stock_boisson-com_boisson#pasliste" algoitem="stock_boisson PREND_LA_VALEUR stock_boisson-com_boisson"/>
        <item code="3#stock_boisson#1#pasliste" algoitem="AFFICHER stock_boisson"/>
        <item code="4#Stock plats:#0" algoitem="AFFICHER &quot;Stock plats:&quot;"/>
        <item code="5#stock_plat#stock_plat-com_plat#pasliste" algoitem="stock_plat PREND_LA_VALEUR stock_plat-com_plat"/>
        <item code="3#stock_plat#1#pasliste" algoitem="AFFICHER stock_plat"/>
        <item code="4#Stock supplément:#0" algoitem="AFFICHER &quot;Stock supplément:&quot;"/>
        <item code="5#stock_supp#stock_supp-com_supplément#pasliste" algoitem="stock_supp PREND_LA_VALEUR stock_supp-com_supplément"/>
        <item code="3#stock_supp#0#pasliste" algoitem="AFFICHER stock_supp"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
