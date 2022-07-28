let form = document.querySelector("#contact");

form.nom.addEventListener("submit", function() {
    validNom(this);
});

form.prenom.addEventListener("submit", function() {
    validPrenom(this);
});

form.mail.addEventListener("submit", function() {
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
    if(validNom(form.nom) && validPrenom(form.prenom) && validEmail(form.email) && validEntreprise(form.entreprise) && validMessage(form.message)) {
        form.submit();
    }
});

const validNom = function(inputNom) {
    let nomRegExp = new RegExp(
        '^[a-zA-ZÀ-ú]+$', 'g'
    );

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
    let prenomRegExp = new regExp(
        '^[a-zA-ZÀ-ù]+$', 'g'
    );

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
