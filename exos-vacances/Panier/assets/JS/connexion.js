let form = document.querySelector("#loginForm");

form.email.addEventListener("change", function() {
    validEmail(this);
});

form.password.addEventListener("change", function() {
    validPassword(this);
});

form.addEventListener("submit", e => {
    e.preventDefault();
    //"&&" => signfie "et" != de "||" qui signifie "ou"
    if(validEmail(form.email) && validPassword(form.password)) {
        form.submit();
    }
});

// ******************** Validation Email ********************
const validEmail = function(inputEmail) {

    let emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

    //"NextElementSibling" : récupère dans le Html l'élément qui suit directement celui spécifié s'il y en a un
    let small = inputEmail.nextElementSibling;
    
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

// ******************** Validation Password ********************
const validPassword = function(inputPassword) {
    let msg;
    let valid = false;
    //au moins 3 caractères
    if (inputPassword.value.length < 3) {
        msg = "Le mot de passe doit contenir au moins 3 caractères";
    }
    //au moins 1 majuscule
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

    let small = inputPassword.nextElementSibling;
    
    if (valid) {
        small.innerHTML = "Mot de passe Valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }

    else {
        small.innerHTML = msg;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};
