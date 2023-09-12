import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marque } from './personne.model';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  private apiUrl = 'http://localhost:8080/projetJEE-1.0-SNAPSHOT/api/marques';

  constructor(private http: HttpClient) { }

  getMarquesList(): Observable<Marque[]> {
    return this.http.get<Marque[]>(this.apiUrl);
  }

  ajoutMarque(marque: Marque): Observable<Marque> {
    return this.http.put<Marque>(this.apiUrl, marque);
  }

  getMarque(id: number): Observable<Marque> {
    return this.http.get<Marque>(`${this.apiUrl}/${id}`);
  }

  deleteMarque(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateMarque(id: number, marque: Marque): Observable<Marque> {
    return this.http.put<Marque>(`${this.apiUrl}/${id}`, marque);
  }
}
