let form = document.querySelector("#loginForm");

//Ecouter la modification de l'email
form.email.addEventListener("change", function() {
    validEmail(this);
});

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
    
    let testEmail = emailRegExp.test(inputEmail.value);
    console.log(testEmail);
    //"NextElementSibling" : va chercher dans le Html l'élément qui suit directement celui spécifié s'il y en a un
    let small = inputEmail.nextElementSibling;
    if (testEmail) {
        small.innerHTML = "Adresse mail Valide";
        small.classList.remove('text-danger');
        small.classList.add('text-warning');
    }

    else {
        small.innerHTML = "Adresse mail Invalide";
        small.classList.remove('text-warning');
        small.classList.add('text-danger');
    }
};
