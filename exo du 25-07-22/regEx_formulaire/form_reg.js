let form = document.querySelector("#form_id");

//Modification du nom
form.nom.addEventListener("change", function() {
    validNom(this);
});

//Modification du prénom
form.prenom.addEventListener("change", function() {
    validPrenom(this);
});

//Modification de la date
form.date_nais.addEventListener("change", function() {
    validDateNaissance(this);
});

//Modification de l'email
form.email.addEventListener("change", function() {
    validEmail(this);
});

//Modification du mot de passe
form.password.addEventListener("change", function() {
    validPassword(this);
});

//Soumission du formulaire
form.addEventListener("submit", e => {
    e.preventDefault();
    //"&&" => signfie "et" != de "||" qui signifie "ou"
    if(validNom(form.nom) && validPrenom(form.prenom) && validDateNaissance(form.date_nais) && validEmail(form.email) && validPassword(form.password)) {
        form.submit();
    }
});

                                        // ********************* LOCAL STORAGE *********************
                                       
//Création des variables pour les boutons
let btn_valide = document.getElementById("valide");
let btn_reset = document.getElementById("reset");

//Fonction du bouton "reset"
btn_reset.addEventListener("click", e => {
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let date = document.getElementById("date");
    let mail = document.getElementById("mail");
    let mdp = document.getElementById("mdp");

//Attribution des valeurs
    nom.value = "";
    prenom.value = "";
    date.value = "";
    mail.value = "";
    mdp.value = "";
});

//Fonction bouton "valider"
btn_valide.addEventListener("click", e => {
//variable = input.value
    nom = nom.value;
    prenom = prenom.value;
    date = date.value;
    mail = mail.value;
    mdp = mdp.value;

//LocalStorage
    localStorage.setItem("nom", nom);
    localStorage.setItem("prenom", prenom);
    localStorage.setItem("date", date);
    localStorage.setItem("mail", mail);
    localStorage.setItem("password", mdp);
});

console.log(localStorage.getItem("nom"));
console.log(localStorage.getItem("prenom"));

                                        // ********************* LOCAL STORAGE (fin) *********************

const validNom = function(inputNom) {
    let nomRegExp = new RegExp(
        '^[a-zA-ZÀ-ú]+$', 'g');
      
    //"NextElementSibling" : récupère dans le Html l'élément qui suit directement celui spécifié s'il y en a un
    let small = inputNom.nextElementSibling;
    
    if (nomRegExp.test(inputNom.value)) {
        small.innerHTML = "Nom valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }

    else {
        small.innerHTML = "Veuillez entrer un nom valide";
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};

const validPrenom = function(inputPrenom) {
    let prenomRegExp = new RegExp(
        '^[a-zA-ZÀ-ú]+$', 'g');
      
    let small = inputPrenom.nextElementSibling;
    
    if (prenomRegExp.test(inputPrenom.value)) {
        small.innerHTML = "Prénom valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }

    else {
        small.innerHTML = "Veuillez entrer un prénom valide";
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};

const validDateNaissance = function(inputDate_nais) {
        let datenaisRegExp = new RegExp(
            /^\d{2}[-./]\d{2}[-./]\d{4}$/, 'g');
        //"\d" pour "digit", "chiffre" en anglais
        //le chiffre entre {} pour signifier le nombre de chiffres maximum autorisés
        //les sigles entre [] pour signifier les caractères autorisés
            
        let small = inputDate_nais.nextElementSibling;
        
        if (datenaisRegExp.test(inputDate_nais.value)) {
            small.innerHTML = "Date de naissance valide";
            small.classList.remove('text-danger');
            small.classList.add('text-success');
            return true;
        }
    
        else {
            small.innerHTML = "Format de date de naissance invalide";
            small.classList.remove('text-success');
            small.classList.add('text-danger');
            return false;
        }
    };

const validEmail = function(inputEmail) {
    //création de l'expression régulière pour valider l'email
        let emailRegExp = new RegExp(
            '^[a-zA-Z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
        //"^" désigne le début du texte
        //"[a-zA-Z0-9.-_]+" désigne l'ensemble des caractères acceptés, avec "+" pour dire qu'ils peuvent être saisis plusieurs fois
        //"[@]{1}" @ autorisé, le "1" entre accolades signifiant qu'il doit être saisi une seule fois
        //"." même chose que pour @
        //"[a-z]{2,10}" lettres autorisées avec minimum et maximum
        //"$" fin de la RegExp
        //"g" marqueur(flag) pour préciser comment lire la RegExp
    
        let small = inputEmail.nextElementSibling;
        
        //test de l'expression régulière :
        if (emailRegExp.test(inputEmail.value)) {
            small.innerHTML = "Adresse mail Valide";
            small.classList.remove('text-danger');
            small.classList.add('text-success');
            return true;
        }
    
        else {
            small.innerHTML = "Adresse mail Invalide";
            small.classList.remove('text-success');
            small.classList.add('text-danger');
            return false;
        }
    };
    
const validPassword = function(inputPassword) {
    let msg;
    let valid = false;
    //au moins 8 caractères
    if (inputPassword.value.length < 8) {
        msg = "Le mot de passe doit contenir au moins 8 caractères";
    }
    //au moins 1 majuscule
    //le "!" désigne l'inverse, "False"
    else if (!/[A-Z]/.test(inputPassword.value)){
        msg = "Le mot de passe doit contenir au moins 1 majuscule";
    }
    //au moins 1 minuscule
    else if (!/[a-z]/.test(inputPassword.value)){
        msg = "Le mot de passe doit contenir au moins 1 minuscule";
    }
    //au moins 1 chiffre
    else if (!/[0-9]/.test(inputPassword.value)){
        msg = "Le mot de passe doit contenir au moins 1 chiffre";
    }
    //Mot de passe valide
    else {
        msg = "Le mot de passe est valide";
        //Quand le MDP est valable, la variable "valid" devient "true"
        valid = true;
    }

    //Affichage
    //Récupération de la balise "small"
    let small = inputPassword.nextElementSibling;
    
    //test de l'expression régulière :
    if (valid) {
        small.innerHTML = "Mot de passe Valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }

    else {
        small.innerHTML = msg;
        small.classList.remove('text-sucess');
        small.classList.add('text-danger');
        return false;
    }
};
