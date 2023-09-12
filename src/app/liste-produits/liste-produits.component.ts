import { Component } from '@angular/core';
import { Produit } from '../personne.model';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent {
  produits: Produit[] = [];
  

  constructor(private produitService: ProduitService, private router: Router) { }
  

  ngOnInit() {
    this.produitService.getProduitsList().subscribe(produits => {
      this.produits = produits;
    });
  }

  private getProduits(){
    this.produitService.getProduitsList().subscribe(data => {
      this.produits = data;
    });
  }

  updateProduit(id: number){
    this.router.navigate(['modif-produit', id]);
  }

  ajoutProduit(){
    this.router.navigate(['ajout-produit']);
  }

  deleteProduit(id: number){
    this.produitService.deleteProduit(id).subscribe( data => {
      console.log(data);
      this.getProduits();
    })
  }

}
