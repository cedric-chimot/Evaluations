//Sélection des éléments
const produitsEl = document.querySelector(".produits");
const produitPanierEl = document.querySelector(".produit-panier");
const totalEl = document.querySelector(".total");
const itemPanierEl = document.querySelector(".total-items");

//Retourner les produits dans le HTML avec boucle "for" et lien vers le tableau
function retourProduits() {
    //"produit" = les éléments du tableau
    produits.forEach((produit) => {
        //"+=", pour ne pas réécrire sur les éléments et les ajouter les uns après les autres
        //Utilisation des backticks pour pouvoir se servir des guillemets dans les div
        produitsEl.innerHTML += 
        //Template HTML pour un produit 
        `
            <div class="produits">
                <div class="produits-container">
                    <div class="produits-image mb-4 d-flex flex-column text-center" style="max-width: 100%;">
                        <img src="${produit.imgSrc}" alt="${produit.nom}" />
                    </div>
                    <div class="description mb-4 text-dark w-100">
                        <h2>${produit.nom}</h2>
                        <h2>${produit.prix}<small> €</small></h2>
                        <p style="font-style: italic;">
                            ${produit.description}
                        </p>
                    </div>
                    <div class="ajouter p-2 w-100" style="margin-bottom: 15px;" onclick="ajoutPanier(${produit.id});">
                        <a href="#panier" class="btn btn-success"><i class='bx bxs-shopping-bag'></i></a>
                        <hr />
                    </div>
                </div>
            </div>
        `
    })
}

retourProduits();

//Création d'un tableau pour le panier
//On utilise "JSON" pour renvoyer un tableau
//Si il n'y a rien dans le localStorage, cela renverra un tableau vide
let panier = JSON.parse(localStorage.getItem("PANIER")) || [];
majPanier();


//Fonction d'ajout au panier,
//Trouver le produit dans le tableau et le sauvegarder dans le panier,
//On va chercher l'ID qui correspond au bouton sur lequel on clique,
//Ajout dans le "if" d'une option pour incrémenter la quantité en appuyant sur le bouton,
//Sauvegarder les items dans le tableau "panier"
function ajoutPanier(id) {
    if (panier.some((item) => item.id === id)){
        changeQuantite("plus", id);
    }
    
    else {
        const item = produits.find((produit) => produit.id === id);
    //On ajoute un objet avec "push" dans le tableau "panier"
        panier.push({
            //destructuration de l'élément
            ...item,
            nombreQuantite : 1
        });
    }

    majPanier();
}

//Mettre à jour le panier
function majPanier() {
    retourItems();
    retourTotal();

    //Sauvegarder dans LocalStorage
    localStorage.setItem("PANIER", JSON.stringify(panier));
}

//Retourner les objets du panier
function retourItems() {
    //Vider les éléments du panier
    produitPanierEl.innerHTML = "";
    panier.forEach((item) => {
        produitPanierEl.innerHTML += 
        `
            <div class="produits-panier">
                <div class="produits-container table">
                    <table>
                        <tr>
                            <th><div class="mb-3 text-center" style="text-decoration: underline;  color: var(--noir); font-style: italic; font-size: large;">Produit:</div></th>
                            <th><div class="m-3 p-3 text-center" style="text-decoration: underline;  color: var(--noir); font-style: italic; font-size: large;">Prix unitaire:</div></th>
                            <th><div class="m-3 p-3 text-center" style="text-decoration: underline; color: var(--noir);  font-style: italic; font-size: large;">Quantité:</div></th>
                        </tr>
                        <td>
                            <div class="produit-info m-4" style="margin-left: 15px;" onclick="supprimerProduits(${item.id});">
                                <img src="${item.imgSrc}" alt="${item.nom}" />
                                <h4 class="mb-3 text-light">${item.nom}</h4>
                            </div>
                        </td>
                        <td>
                            <div class="prix-unit text-center" style="margin-left: 45px; font-size: large;">
                                <div style="">${item.prix}<small>€</small></div>
                            </div>
                        </td>
                        <td>
                            <div class="quantite mt-3 w-25">
                                <div class="btn minus btn-warning m-3" style="font-size: 18px;" onclick="changeQuantite('moins', ${item.id})">-</div>
                                <div class="nombre m-2" style="font-size: large;">${item.nombreQuantite}</div>
                                <div class="btn plus btn-success m-3" style="font-size: 18px;" onclick="changeQuantite('plus', ${item.id})">+</div>
                            </div>
                        </td>
                    </table> 
                </div>
            </div>
        `
    })
}

//Calcul et retour du total
function retourTotal() {
    //Variables pour le prix et le nombre de produits
    let prixTotal = 0;
    let totalProduits = 0;

    panier.forEach((item) => {
        prixTotal += item.prix * item.nombreQuantite;
        totalProduits += item.nombreQuantite;
    })

    totalEl.innerHTML = `Total à payer (${totalProduits} produits): ${prixTotal.toFixed(2)} €`
    itemPanierEl.innerHTML = totalProduits;
}

//Supprimer des produits du panier
function supprimerProduits(id) {
    //Utilisation de "filter" pour filtrer le tableau
    //On filtre tous les produits du panier pour lesquels l'id du produit est différent de l'id de la fonction
    //Comme cela on garde afficher les produits qui ne correspondent pas à l'id du produit que l'on supprime
    panier = panier.filter((item) => item.id !== id)

    majPanier();
}

//Fonction changement de quantité
//"action" : plus ou moins, "id" : l'élément que l'on veut changer
function changeQuantite(action, id) {
    //Utilisation de "map"
    //"map" va appliquer la fonction sur chaque élément du tableau
    //On obtient un tableau mis à jour qui devient notre panier
    panier = panier.map((item) => {
        let nombreQuantite = item.nombreQuantite;
        //Fonction pour décrémenter ou incrémenter en appuyant sur les boutons +/-
        if (item.id === id) {
            //Décrémenter jusqu'à 1
            if (action === "moins" && nombreQuantite > 1) {
            nombreQuantite--;
        }
        //Implémenter jusqu'au stock maximum
        else if (action === "plus" && nombreQuantite < item.stock) {
            nombreQuantite++;
        }
        
        }
//Si l'ancienne quantité change, alors la quantité change
//Sinon la quantité sera la même que précédemment
        return {
            ...item,
            nombreQuantite,
        };
    });

    majPanier();
}