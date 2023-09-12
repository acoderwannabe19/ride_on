import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from './personne.model';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private apiUrl = 'http://localhost:8080/projetJEE-1.0-SNAPSHOT/api/personnes';

  constructor(private http: HttpClient) { }

  getPersonnesList(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.apiUrl);
  }

  ajoutPersonne(personne: Personne): Observable<Personne> {
    return this.http.put<Personne>(this.apiUrl, personne);
  }

  getPersonne(id: number): Observable<Personne> {
    return this.http.get<Personne>(`${this.apiUrl}/${id}`);
  }

  deletePersonne(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updatePersonne(id: number, personne: Personne): Observable<Personne> {
    return this.http.put<Personne>(`${this.apiUrl}/${id}`, personne);
  }
}
