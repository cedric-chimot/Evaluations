let form = document.querySelector("#contact");

form.nom.addEventListener("submit", function() {
    validNom(this);
});

form.prenom.addEventListener("submit", function() {
    validPrenom(this);
});

form.email.addEventListener("submit", function() {
    validEmail(this);
});

form.entreprise.addEventListener("submit", function() {
    validEntreprise(this);
});

form.message.addEventListener("submit", function() {
    validMessage(this);
});

form.addEventListener("submit", e =>{
    e.preventDefault();
    if(validNom(form.nom) && validPrenom(form.prenom) && validEmail(form.email) && validEntreprise(form.entreprise)  && validMessage(form.message)) {
        form.submit();
    }
});

const validNom = function(inputNom) {
    let nomRegExp = new RegExp(
        '^[a-zA-ZÀ-ú]+$', 'g');

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

const validEmail = function(inputEmail) {
    let emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

    let small = inputEmail.nextElementSibling;

    if (emailRegExp.test(inputEmail.value)) {
        small.innerHTML = "Adresse mail valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;    
    }

    else {
        small.innerHTML = "Veuillez entrer un Email valide";
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};

const validTelephone = function(inputTelephone) {
    let telephoneRegExp = new RegExp(
        '^(0|\33)[1-9](*[0-9]{2}{4})$');

    let small = inputTelephone.nextElementSibling;

    if(telephoneRegExp.test(inputTelephone.value)) {
        small.innerHTML = "Numéro de téléphone valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }

    else {
        small.innerHTML = "Veuillez entrer un numéro de téléphone valide"
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
}

const validEntreprise = function(inputEntreprise) {
    let nomRegExp = new RegExp(
        '^[a-zA-ZÀ-ú]+$', 'g');

    let small = inputEntreprise.nextElementSibling;
    
    if (nomRegExp.test(inputEntreprise.value)) {
        small.innerHTML = "Nom d'entreprise valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }

    else {
        small.innerHTML = "Veuillez entrer un nom d'entreprise valide";
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};

const validMessage = function(inputMessage) {
    let msg;
    let valid = false;

    if(inputMessage.value.length > 250) {
        msg = "Votre message ne doit pas comporter plus de 250 caractères";
    }

    else {
        msg = "Votre message est valide";
        valid = true;
    };

    let small = inputMessage.nextElementSibling;

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
    };
}