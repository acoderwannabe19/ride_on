import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from './personne.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl = 'http://localhost:8080/projetJEE-1.0-SNAPSHOT/api/categories';

  constructor(private http: HttpClient) { }

  getCategoriesList(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.apiUrl);
  }

  ajoutCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(this.apiUrl, categorie);
  }

  getCategorie(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(`${this.apiUrl}/${id}`);
  }

  deleteCategorie(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateCategorie(id: number, categorie: Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(`${this.apiUrl}/${id}`, categorie);
  }
}
