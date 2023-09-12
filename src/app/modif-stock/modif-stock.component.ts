import { Component, OnInit } from '@angular/core';
import { Produit, Stock, Magasin } from '../personne.model';
import { ProduitService } from '../produit.service';
import { MagasinService } from '../magasin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-modif-stock',
  templateUrl: './modif-stock.component.html',
  styleUrls: ['./modif-stock.component.css']
})
export class ModifStockComponent implements OnInit {
  
  produit: number=0;
  magasin: number=0;
  stock: Stock = new Stock();
  produits: Produit[] = [];
  magasins: Magasin[] = [];

  constructor(private produitService: ProduitService, 
    private stockService: StockService,
    private magasinService: MagasinService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.produit = this.route.snapshot.params['produit'];
    this.magasin = this.route.snapshot.params['magasin']
    
    this.produitService.getProduitsList().subscribe(produits => {
      this.produits = produits;
    });
    
    this.magasinService.getMagasinsList().subscribe(magasins => {
      this.magasins = magasins;
    });

    this.stockService.getStock(this.produit, this.magasin).subscribe(data => {
      this.stock = data;
    }, error => console.log(error));
}

onMagasinChange(value: any) {
    this.stock.magasin.id = value;
  }

onProduitChange(value: any) {
  this.stock.produit.id = value;

}

onSubmit() {
  this.stockService.updateStock(this.produit, this.magasin, this.stock).subscribe(
    data => {
      this.goToStocksList();
    },
    error => console.log('Error updating employee:', error)
  )


}

goToStocksList(){
  this.router.navigate(['/stocks']);
}

}
