import { Component, OnInit } from '@angular/core';
import { Stock } from '../personne.model';
import { Router } from '@angular/router';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-liste-stocks',
  templateUrl: './liste-stocks.component.html',
  styleUrls: ['./liste-stocks.component.css']
})
export class ListeStocksComponent implements OnInit {
  stocks: Stock[] = [];
  

  constructor(private stockService: StockService, private router: Router) { }
  

  ngOnInit() {
    this.stockService.getStocksList().subscribe(stocks => {
      this.stocks = stocks;
    });
  }

  private getStocks(){
    this.stockService.getStocksList().subscribe(data => {
      this.stocks = data;
    });
  }

  updateStock(produit: number, magasin: number){  
    console.log(produit);
    console.log(magasin);
    
      
    this.router.navigate(['modif-stock', magasin, produit]);
  }

  ajoutStock(){
    this.router.navigate(['ajout-stock']);
  }

  deleteStock(produit: number, magasin: number){
    this.stockService.deleteStock(produit, magasin).subscribe( data => {
      console.log(data);
      this.getStocks();
    })
  }

}
