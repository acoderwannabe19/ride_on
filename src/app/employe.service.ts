import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from './personne.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
 
  private apiUrl = 'http://localhost:8080/projetJEE-1.0-SNAPSHOT/api/employes';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Headers': 'Content-Type', // Replace with your API server's domain
    }),
  };

  constructor(private http: HttpClient) { }

  getEmployesList(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.apiUrl);
  }

  ajoutEmploye(employe: Employe): Observable<Employe> {
    return this.http.put<Employe>(this.apiUrl, employe);
  }

  getEmploye(id: number): Observable<Employe> {
    return this.http.get<Employe>(`${this.apiUrl}/${id}`);
  }

  deleteEmploye(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateEmploye(id: number, employe: Employe): Observable<Employe> {
    return this.http.put<Employe>(`${this.apiUrl}/${id}`, employe);
  }
}
