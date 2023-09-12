import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './personne.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8080/projetJEE-1.0-SNAPSHOT/api/clients';

  constructor(private http: HttpClient) { }

  getClientsList(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  ajoutClient(client: Client): Observable<Client> {
    return this.http.put<Client>(this.apiUrl, client);
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateClient(id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${id}`, client);
  }
}
