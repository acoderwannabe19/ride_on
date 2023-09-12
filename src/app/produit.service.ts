import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './personne.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'http://localhost:8080/projetJEE-1.0-SNAPSHOT/api/produits';

  constructor(private http: HttpClient) { }

  getProduitsList(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl);
  }

  ajoutProduit(produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(this.apiUrl, produit);
  }

  getProduit(id: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.apiUrl}/${id}`);
  }

  deleteProduit(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateProduit(id: number, produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.apiUrl}/${id}`, produit);
  }
}
