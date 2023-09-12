import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Magasin } from './personne.model';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {
  private apiUrl = 'http://localhost:8080/projetJEE-1.0-SNAPSHOT/api/magasins';

  constructor(private http: HttpClient) { }

  getMagasinsList(): Observable<Magasin[]> {
    return this.http.get<Magasin[]>(this.apiUrl);
  }

  ajoutMagasin(magasin: Magasin): Observable<Magasin> {
    return this.http.put<Magasin>(this.apiUrl, magasin);
  }

  getMagasin(id: number): Observable<Magasin> {
    return this.http.get<Magasin>(`${this.apiUrl}/${id}`);
  }

  deleteMagasin(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateMagasin(id: number, magasin: Magasin): Observable<Magasin> {
    return this.http.put<Magasin>(`${this.apiUrl}/${id}`, magasin);
  }
}
