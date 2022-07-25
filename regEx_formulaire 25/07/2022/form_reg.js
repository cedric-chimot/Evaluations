let form = document.querySelector("#form_id");

form.nom.addEventListener("change", function() {
    validNom(this);
});

form.email.addEventListener("change", function() {
    validEmail(this);
});

const validNom = function(inputNom) {
    let nomRegExp = new RegExp(
        '[a-zA-Z0-9]+', 'g');

    let small = inputNom.nextElementSibling;

    if (nomRegExp.test(inputNom.value)) {
        small.innerHTML = "Nom valide";
        small.classList.remove("text-danger");
        small.classList.add("text-success");
    }

    else {
        small.innerHTML = "Veuillez entrer un nom valide";
        small.classList.remove("text-success");
        small.classList.add("text-danger");
    }
}

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
    