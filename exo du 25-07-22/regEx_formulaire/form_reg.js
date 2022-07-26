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

const validNom = function(inputNom) {
    let emailRegExp = new RegExp(
        '^[a-zA-Z]+$', 'g');
      
    //"NextElementSibling" : récupère dans le Html l'élément qui suit directement celui spécifié s'il y en a un
    let small = inputNom.nextElementSibling;
    
    if (emailRegExp.test(inputNom.value)) {
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
    let emailRegExp = new RegExp(
        '^[a-zA-Z]+$', 'g');
      
    let small = inputPrenom.nextElementSibling;
    
    if (emailRegExp.test(inputPrenom.value)) {
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
        let emailRegExp = new RegExp(
            /^\d{2}[-./]\d{2}[-./]\d{4}$/, 'g');
        //"\d" pour "digit", "chiffre" en anglais
        //le chiffre entre {} pour signifier le nombre de chiffres maximum autorisés
        //les sigles entre [] pour signifier les caractères autorisés
            
        let small = inputDate_nais.nextElementSibling;
        
        if (emailRegExp.test(inputDate_nais.value)) {
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
