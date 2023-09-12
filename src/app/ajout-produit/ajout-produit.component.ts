import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../categorie.service';
import { MarqueService } from '../marque.service';
import { Produit, Categorie, Marque } from '../personne.model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
  
  produit: Produit = new Produit();
  categories: Categorie[] = [];
  marques: Marque[] = [];

  constructor(
    private marqueService: MarqueService,
    private categorieService: CategorieService,
    private produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.marqueService.getMarquesList().subscribe(marques => {
      this.marques = marques;
    });

    this.categorieService.getCategoriesList().subscribe(categories => {
      this.categories = categories;
    });


}


onMarqueChange(value: any) {
    this.produit.marqueId.id = value;
  }


onCategorieChange(value: any) { 
  this.produit.categorieId.id = value;
}

onSubmit() {
  this.produitService.ajoutProduit(this.produit).subscribe(
    data => {
      this.goToProduitList();
    },
    error => console.log('Error updating order:', error)
  )
  
}


goToProduitList(){
  this.router.navigate(['/produits']);
}

}
