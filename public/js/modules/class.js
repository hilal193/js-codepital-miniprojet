export class Patient {
    constructor(nom, maladie, argent, poche, etatSante) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        // this.traitement = this.traitement;
    }
    traitement = (medicament) => {
        console.log("le traitement de "+this.nom+" coût "+medicament.prix +" €");
        if (this.argent >= medicament.prix) {
            this.poche.push(medicament.nom);
            this.paye(medicament);
            this.takeCare(1);
        } else {
            this.takeCare(2);
            // console.log(`${this.nom} n'a pas assez d'argent pour payer le traitement`);
            console.log(`${this.nom} est mort, donc il est au cimetiere`);
        }
    };
    gotTo = (lieu) => {
        lieu.personne.push(this.nom);
        console.log(`${this.nom} est allé à ${lieu.nom}`);
        lieu.personne.splice(lieu.personne.indexOf(this.nom),1);
    };
    takeCare=(a)=>{
        if (a==1) {
            this.etatSante="soigné";
            console.log(`${this.nom} est ${this.etatSante}`);
            
        }else{
            cimetiere.push(this.nom);
            console.log(`${this.nom} n'a pas assez d'argent pour payer le traitement`);
        }
    }
    paye = (prixMedicament) => {
        this.argent -= prixMedicament;
    }
}

export class Doctor {
    constructor(nom, argent, cabinet) {
        this.nom = nom;
        this.argent = argent;
        this.cabinet = cabinet;
    }
    diagnostique = (patient) => {
        switch (patient.maladie) {
            case "mal indenté":
                console.log(`la maladie de ${patient.nom} est ${patient.maladie}`);
                return patient.maladie = "ctrl+maj+f";
            case "unsave":
                console.log(`la maladie de ${patient.nom} est ${patient.maladie}`);
                return patient.maladie = "saveOnFocusChange";
            case "404":
                console.log(`la maladie de ${patient.nom} est ${patient.maladie}`);
                return patient.maladie = "CheckLinkRelation";
            case "azmatique":
                console.log(`la maladie de ${patient.nom} est ${patient.maladie}`);
                return patient.maladie = "Ventoline";
            case "syntaxError":
                console.log(`la maladie de ${patient.nom} est ${patient.maladie}`);
                return patient.maladie = "f12+doc";
            default:
                console.log("ERROR");
                break;
        }
    };
    patientIn = (patient,entre) => {
     entre.personne.splice(entre.personne.indexOf(patient.nom),1);
        this.cabinet.push(patient.nom);
        console.log(`${patient.nom} est entré dans le cabinet`);

    };
    patientOut = (sors) => {
        this.cabinet.splice(this.cabinet.indexOf(sors.nom),1);
        console.log(`${sors.nom} a quitté le cabinet`);

    }
}

export class Diagnostique {
    constructor(maladie, traitement) {
        this.maladie = maladie;
        this.traitement = traitement;
    }
}

export class Traitement {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
}

export class Lieu {
    constructor(nom, personne) {
        this.nom = nom;
        this.personne = personne;
    }
}

let cimetiere = [];
