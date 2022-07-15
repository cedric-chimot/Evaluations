function Valider() {

    var nom = document.forms["contact"]["nom"];
    var prenom = document.forms["contact"]["prenom"];
    var email = document.forms["contact"]["email"];
    var entreprise = document.forms["contact"]["entreprise"];
    var message = document.forms["contact"]["message"];

    if (nom.value == "")                               
    { 
        alert("Veuillez entrer un nom valide !"); 
        nom.focus(); 
        return false; 
    }

    if (prenom.value == "")                               
    { 
        alert("Veuillez entrer un prénom valide !"); 
        prenom.focus(); 
        return false; 
    }      
    if (email.value == "")                                   
    { 
        alert("Veuillez entrer une adresse email valide !"); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Veuillez entrer une adresse email valide !"); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Veuillez entrer une adresse email valide !"); 
        email.focus(); 
        return false; 
    }    
    if (entreprise.value == "")                           
    { 
        alert("Veuillez entrer un nom d'entreprise valide !"); 
        entreprise.focus(); 
        return false; 
    }    
    if (message.value == "")                  
    { 
        alert("Veuillez écrire votre message !"); 
        message.focus(); 
        return false; 
    }

    return alert("Merci pour votre message, je vous répondrai dés que possible !");
}
