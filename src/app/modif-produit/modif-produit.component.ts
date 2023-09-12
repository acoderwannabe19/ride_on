import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../categorie.service';
import { MarqueService } from '../marque.service';
import { Produit, Categorie, Marque } from '../personne.model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-modif-produit',
  templateUrl: './modif-produit.component.html',
  styleUrls: ['./modif-produit.component.css']
})
export class ModifProduitComponent implements OnInit {
  
  id: number=0;
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
    this.id = this.route.snapshot.params['id'];

    this.marqueService.getMarquesList().subscribe(marques => {
      this.marques = marques;
    });

    this.categorieService.getCategoriesList().subscribe(categories => {
      this.categories = categories;
    });

    this.produitService.getProduit(this.id).subscribe(data => {
      this.produit = data;
    }, error => console.log(error));


}


onMarqueChange(value: any) {
    this.produit.marqueId.id = value;
  }


onCategorieChange(value: any) { 
  this.produit.categorieId.id = value;
}

onSubmit() {
  this.produitService.updateProduit(this.id, this.produit).subscribe(
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
