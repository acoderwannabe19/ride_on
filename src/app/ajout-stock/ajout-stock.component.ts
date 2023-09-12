import { Component, OnInit } from '@angular/core';
import { Produit, Stock, Magasin } from '../personne.model';
import { ProduitService } from '../produit.service';
import { MagasinService } from '../magasin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-ajout-stock',
  templateUrl: './ajout-stock.component.html',
  styleUrls: ['./ajout-stock.component.css']
})
export class AjoutStockComponent implements OnInit {
  
  stock: Stock = new Stock();
  produits: Produit[] = [];
  magasins: Magasin[] = [];

  constructor(private produitService: ProduitService, 
    private stockService: StockService,
    private magasinService: MagasinService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.produitService.getProduitsList().subscribe(produits => {
      this.produits = produits;
    });
    
    this.magasinService.getMagasinsList().subscribe(magasins => {
      this.magasins = magasins;
    });

    
}

onMagasinChange(value: any) {
    this.stock.magasin.id = value;
  }

onProduitChange(value: any) {
  this.stock.produit.id = value;

}

onSubmit() {
  this.stockService.ajoutStock(this.stock).subscribe(
    data => {
      this.goToStocksList();
    },
    error => console.log('Error creating employee:', error)
  )


}


goToStocksList(){
  this.router.navigate(['/stocks']);
}
}
