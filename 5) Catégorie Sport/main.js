let liste_cat = ["Poussin", "Pupille", "Minime", "Cadet"];

function categorie () {
    let age=prompt("Quel est votre âge ?")

    if (age == "6" || age == "7") {
        alert("Vous appartenez à la catégorie" + " " + liste_cat[0]);
    }

    else if (age == "8" || age == "9") {
        alert("Vous appartenez à la catégorie" + " " + liste_cat[1]);
    }

    else if (age == "10" || age == "11") {
        alert("Vous appartenez à la catégorie" + " " + liste_cat[2]);
    }

    else if (age >= "12" && age <= "17") {
        alert("Vous appartenez à la catégorie" + " " + liste_cat[3]);
    }

    else {
        alert("Âge non valide");
    }
}