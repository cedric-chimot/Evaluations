let form = document.querySelector("#loginForm");

//Ecouter la modification de l'email
form.email.addEventListener("change", function() {
    validEmail(this);
});

//Ecouter la modification du mot de passe
form.password.addEventListener("change", function() {
    validPassword(this);
});

//Ecouter la soumission du formulaire
form.addEventListener("submit", e => {
    e.preventDefault();
    //"&&" => signfie "et" != de "||" qui signifie "ou"
    if(validEmail(form.email) && validPassword(form.password)) {
        form.submit();
    }
});

// ******************** Validation Email ********************
const validEmail = function(inputEmail) {
//création de l'expression régulière pour valider l'email
    let emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
    //"^" désigne le début du texte
    //"[a-zA-Z0-9.-_]+" désigne l'ensemble des caractères acceptés, avec "+" pour dire qu'ils peuvent être saisis plusieurs fois
    //"[@]{1}" @ autorisé, le "1" entre accolades signifiant qu'il doit être saisi une seule fois
    //"." même chose que pour @
    //"[a-z]{2,10}" lettres autorisées avec minimum et maximum
    //"$" fin de la RegExp
    //"g" marqueur(flag) pour préciser comment lire la RegExp

    //"NextElementSibling" : récupère dans le Html l'élément qui suit directement celui spécifié s'il y en a un
    let small = inputEmail.nextElementSibling;
    
    //test de l'expression régulière :
    if (emailRegExp.test(inputEmail.value)) {
        small.innerHTML = "Adresse mail Valide";
        small.classList.remove('text-danger');
        small.classList.add('text-warning');
        return true;
    }

    else {
        small.innerHTML = "Adresse mail Invalide";
        small.classList.remove('text-warning');
        small.classList.add('text-danger');
        return false;
    }
};

// ******************** Validation Password ********************
const validPassword = function(inputPassword) {
    let msg;
    let valid = false;
    //au moins 3 caractères
    if (inputPassword.value.length < 3) {
        msg = "Le mot de passe doit contenir au moins 3 caractères";
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
