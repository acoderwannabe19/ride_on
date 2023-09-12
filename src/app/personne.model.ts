
export class Personne {
    id: number=0;
    prenom: string="";
    nom: string="";
    telephone: string="";
    email: string="";

    
   
  }

export class Client extends Personne {
  adresse: string="";
  ville: string="";
  etat: string="";
  codeZip: string="";
  
}


export class Magasin {
  id: number=0;
  nom: string='';
  email: string="";
  telephone: string="";
  adresse: string="";
  ville: string="";
  etat: string="";
  codeZip: string="";
}

export class Employe extends Client {
  actif: number=0;
  managerId: Employe | null = null;
  magasinId: Magasin = {
    id: 0,
    nom: "",
    email: "",
    telephone: "",
    adresse: "",
    ville: "",
    etat: "",
    codeZip: ""
  };
}

export class Marque {
  id: number = 0;
  nom: string = "";
}

export class Categorie {
  id: number = 0;
  nom: string = "";
}

export class Stock {
  quantite: number = 0;
  produit: Produit = {
    id: 0,
    anneeModel: 0,
    nom: "",
    prixDepart: 0,
    categorieId: new Categorie,
    marqueId: new Marque
  };
  magasin: Magasin = {
    id: 0,
    nom: "",
    email: "",
    telephone: "",
    adresse: "",
    ville: "",
    etat: "",
    codeZip: ""
  };
}

export class Produit {
  id: number = 0;
  anneeModel: number = 0;
  nom: string = "";
  prixDepart: number = 0;
  categorieId: Categorie = {
    id: 0,
    nom: ""
  };
  marqueId: Marque = {
    id: 0,
    nom: ""
  };
}

export class Commande {
  numero: number = 0;
  dateCommande: Date | null=null;
  dateLivraison: Date | null=null;
  dateLivraisonVoulue: Date | null=null;
  statut: number = 0;
  clientId: Client = {
    adresse: "",
    ville: "",
    etat: "",
    codeZip: "",
    id: 0,
    prenom: "",
    nom: "",
    telephone: "",
    email: ""
  };
  magasinId: Magasin = {
    id: 0,
    nom: "",
    email: "",
    telephone: "",
    adresse: "",
    ville: "",
    etat: "",
    codeZip: ""
  };
  vendeurId: Employe = {
    actif: 0,
    managerId: new Employe,
    magasinId: new Magasin,
    adresse: "",
    ville: "",
    etat: "",
    codeZip: "",
    id: 0,
    prenom: "",
    nom: "",
    telephone: "",
    email: ""
  };

  
}

export class ArticleCommande {
  ligne: number = 0;
  prixDepart: number = 0;
  quantite: number = 0;
  remise: number = 0;
  numeroCommande: Commande = {
    numero: 0,
    dateCommande: new Date,
    dateLivraison: new Date,
    dateLivraisonVoulue: new Date,
    statut: 0,
    clientId: new Client,
    magasinId: new Magasin,
    vendeurId: new Employe
  };
  produitId: Produit = {
    id: 0,
    anneeModel: 0,
    nom: "",
    prixDepart: 0,
    categorieId: new Categorie,
    marqueId: new Marque
  };

}