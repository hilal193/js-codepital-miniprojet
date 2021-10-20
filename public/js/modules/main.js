import {
    Patient,
    Doctor,
    Diagnostique,
    Traitement,
    Lieu
} from "./class.js";
import {
    Chat
} from "./chat.js";

// instance des patients
let marcus = new Patient("Marcus", "mal indenté", 100, [], "malade");

let optimus = new Patient("Optimus", "unsave", 200, [], "malade");
let sangoku = new Patient("Sangoku", "404", 80, [], "malade");
let darthVader = new Patient("DartVader", "azmatique", 110, [], "malade");
let semicolon = new Patient("Semicolon", "syntaxError", 60, [], "malade");

// instance diagnostique
let mal_indenté = new Diagnostique("mal indenté", "ctrl+maj+f");
let unsave = new Diagnostique("unsave", "saveOnFocusChange");
let erreur = new Diagnostique("404", "CheckLinkRelation");
let azmatique = new Diagnostique("azmatique", "Ventoline");
let syntaxError = new Diagnostique("syntaxError", "f12+doc");
let diagnostiqueTout = [mal_indenté, unsave, erreur, azmatique, syntaxError];

// instance traitement
let premierTraitement = new Traitement("ctrl+maj+f", 60);
let deuxiemeTraitement = new Traitement("saveOnFocusChange", 100);
let troisiemeTraitement = new Traitement("CheckLinkRelation", 35);
let quatriemeTraitement = new Traitement("Ventoline", 40);
let cinqiemeTraitement = new Traitement("f12+doc", 20);

let traitementTout = [premierTraitement, deuxiemeTraitement, troisiemeTraitement, quatriemeTraitement, cinqiemeTraitement];


// instance lieux
let salleDattente = new Lieu("salle d'attente", [marcus.nom, optimus.nom, sangoku.nom, darthVader.nom, semicolon.nom]);

let patientTout = [marcus, optimus, sangoku, darthVader, semicolon];

let pharmacie = new Lieu("pharmacie", []);


// instance docteur
let debug = new Doctor("debugger", 0, ["chat"]);
let docteur = new Doctor("docteur", 0, [])

let traitementToutLength = traitementTout.length;
let patientToutLength = patientTout.length;
let diagnostiqueToutLength = diagnostiqueTout.length;
let chat = new Chat("sphynx");
// console.log(chat.miaule());

// setInterval(() => {
//     chat.miaule();
// }, 2000)

// while
// 1
let compteur = 0;
while (compteur < traitementToutLength && compteur < patientToutLength && compteur < diagnostiqueToutLength) {
    console.log(`dans la ${salleDattente.nom} il y a ${salleDattente.personne.length} personnes`);
    debug.patientIn(patientTout[compteur], salleDattente);
    chat.miaule();
    debug.diagnostique(patientTout[compteur], diagnostiqueTout[compteur]);
    console.log(`le traitement de ${patientTout[compteur].nom} est ${traitementTout[compteur].nom}`);

    patientTout[compteur].paye(50);

    console.log(`${patientTout[compteur].nom} a payé le ${docteur.nom}`);

    console.log(`${patientTout[compteur].nom} a ${patientTout[compteur].argent} € actuellement`);

    debug.patientOut(patientTout[compteur]);

    patientTout[compteur].gotTo(pharmacie);

    patientTout[compteur].traitement(traitementTout[compteur]);
    console.log("_____________");  
    compteur++;
}




// for
// for (let compteur = 0; compteur < traitementToutLength && compteur < patientToutLength && compteur < diagnostiqueToutLength; compteur++) {
//     console.log(`dans la ${salleDattente.nom} il y a ${salleDattente.personne.length} personnes`);
//     debug.patientIn(patientTout[compteur], salleDattente);
//     chat.miaule();
//     debug.diagnostique(patientTout[compteur], diagnostiqueTout[compteur]);
//     console.log(`le traitement de ${patientTout[compteur].nom} est ${traitementTout[compteur].nom}`);

//     patientTout[compteur].paye(50);

//     console.log(`${patientTout[compteur].nom} a payé le ${docteur.nom}`);

//     console.log(`${patientTout[compteur].nom} a ${patientTout[compteur].argent} € actuellement`);

//     debug.patientOut(patientTout[compteur]);

//     patientTout[compteur].gotTo(pharmacie);

//     patientTout[compteur].traitement(traitementTout[compteur]);
//     console.log("_____________");
    
// }


// foreach

// let pourChaque= [traitementTout,patientTout,diagnostiqueTout];

// pourChaque.forEach(compteur => {
    
//     console.log(`dans la ${salleDattente.nom} il y a ${salleDattente.personne.length} personnes`);
//     debug.patientIn(patientTout[compteur], salleDattente);
//     chat.miaule();
//     debug.diagnostique(patientTout[compteur], diagnostiqueTout[compteur]);
//     console.log(`le traitement de ${patientTout[compteur].nom} est ${traitementTout[compteur].nom}`);

//     patientTout[compteur].paye(50);

//     console.log(`${patientTout[compteur].nom} a payé le ${docteur.nom}`);

//     console.log(`${patientTout[compteur].nom} a ${patientTout[compteur].argent} € actuellement`);

//     debug.patientOut(patientTout[compteur]);

//     patientTout[compteur].gotTo(pharmacie);

//     patientTout[compteur].traitement(traitementTout[compteur]);
//     console.log("_____________");
// });




// console.log(`dans la ${salleDattente.nom} il y a ${salleDattente.personne.length} personnes`);

// debug.patientIn(marcus,salleDattente);

// console.log("Miau");

// debug.diagnostique(marcus,mal_indenté);

// console.log(`le traitement de ${marcus.nom} est ${premierTraitement.nom}`);

// marcus.paye(50);

// console.log(`${marcus.nom} a payé le ${docteur.nom}`);

// console.log(`${marcus.nom} a ${marcus.argent} € actuellement`);

// debug.patientOut(marcus);

// marcus.gotTo(pharmacie);

// marcus.traitement(premierTraitement);

// console.log("_____________");


// console.log(`Dans la ${salleDattente.nom} il y a ${salleDattente.personne.length} personne`);
// debug.patientIn(optimus,salleDattente);

// console.log("Miau");
// debug.diagnostique(optimus,unsave);
// console.log(`le traitement de ${optimus.nom} est ${deuxiemeTraitement.nom}`);

// optimus.paye(50);

// console.log(`${optimus.nom} a payé le ${docteur.nom}`);
// console.log(`${optimus.nom} a ${optimus.argent} € actuellement`);

// debug.patientOut(optimus);

// optimus.gotTo(pharmacie);

// optimus.traitement(deuxiemeTraitement);
// console.log("_____________");


// console.log(`Dans la ${salleDattente.nom} il y a ${salleDattente.personne.length} personne`);
// debug.patientIn(sangoku,salleDattente);
// console.log("Miau");
// debug.diagnostique(sangoku,erreur);
// console.log(`le traitement de ${sangoku.nom} est ${troisiemeTraitement.nom}`);
// sangoku.paye(50);
// console.log(`${sangoku.nom} a payé le ${docteur.nom}`);
// console.log(`${sangoku.nom} a ${sangoku.argent} € actuellement`);

// debug.patientOut(sangoku);

// sangoku.gotTo(pharmacie);
// sangoku.traitement(troisiemeTraitement);
// console.log("_____________");


// console.log(`Dans la ${salleDattente.nom} il y a ${salleDattente.personne.length} personne`);
// debug.patientIn(darthVader,salleDattente);
// console.log("Miau");
// debug.diagnostique(darthVader,azmatique);
// console.log(`le traitement de ${darthVader.nom} est ${quatriemeTraitement.nom}`);
// sangoku.paye(50);
// console.log(`${darthVader.nom} a payé le ${docteur.nom}`);
// console.log(`${darthVader.nom} a ${darthVader.argent} € actuellement`);

// debug.patientOut(darthVader);

// sangoku.gotTo(pharmacie);
// sangoku.traitement(quatriemeTraitement);
// console.log("_____________");


// console.log(`Dans la ${salleDattente.nom} il y a ${salleDattente.personne.length} personne`);
// debug.patientIn(semicolon,salleDattente);

// console.log("Miau");
// debug.diagnostique(semicolon,syntaxError);
// console.log(`le traitement de ${semicolon.nom} est ${cinqiemeTraitement.nom}`);

// optimus.paye(50);

// console.log(`${semicolon.nom} a payé le ${docteur.nom}`);
// console.log(`${semicolon.nom} a ${semicolon.argent} € actuellement`);

// debug.patientOut(semicolon);

// optimus.gotTo(pharmacie);

// optimus.traitement(cinqiemeTraitement);
// console.log("_____________");

// console.log("salle d'attente vide : plus aucun patient");
// console.log("dans "+salleDattente.nom+" contient "+salleDattente.personne.length+ " personne(s)");