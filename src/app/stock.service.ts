import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from './personne.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = 'http://localhost:8080/projetJEE-1.0-SNAPSHOT/api/stocks';

  constructor(private http: HttpClient) { }

  getStocksList(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.apiUrl);
  }

  ajoutStock(stock: Stock): Observable<Stock> {
    return this.http.put<Stock>(this.apiUrl, stock);
  }

  getStock(produit: number, magasin: number): Observable<Stock> {
    return this.http.get<Stock>(`${this.apiUrl}/${magasin}/${produit}`);
  }

  deleteStock(produit: number, magasin: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${magasin}/${produit}`);
  }

  updateStock(produit: number, magasin: number, stock: Stock): Observable<Stock> {
    return this.http.put<Stock>(`${this.apiUrl}/${magasin}/${produit}`, stock);
  }
}
