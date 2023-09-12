import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from './personne.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private apiUrl = 'http://localhost:8080/projetJEE-1.0-SNAPSHOT/api/commandes';

  constructor(private http: HttpClient) { }

  getCommandesList(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.apiUrl);
  }

  
  ajoutCommande(commande: Commande): Observable<Commande> {
    return this.http.put<Commande>(this.apiUrl, commande);
  }

  getCommande(numero: number): Observable<Commande> {
    return this.http.get<Commande>(`${this.apiUrl}/${numero}`);
  }

  deleteCommande(numero: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${numero}`);
  }

  updateCommande(numero: number, commande: Commande): Observable<Commande> {
    return this.http.put<Commande>(`${this.apiUrl}/${numero}`, commande);
  }
}
