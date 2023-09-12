import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleCommande } from './personne.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleCommandeService {
  private apiUrl = 'http://localhost:8080/projetJEE-1.0-SNAPSHOT/api/articlesCommandes';

  constructor(private http: HttpClient) { }

  getArticlesCommandeList(): Observable<ArticleCommande[]> {
    return this.http.get<ArticleCommande[]>(this.apiUrl);
  }

  ajoutArticleCommande(articleCommande: ArticleCommande): Observable<ArticleCommande> {
    return this.http.put<ArticleCommande>(this.apiUrl, articleCommande);
  }

  getArticleCommande(ligne: number, numero: number): Observable<ArticleCommande> {
    return this.http.get<ArticleCommande>(`${this.apiUrl}/${ligne}/${numero}`);
  }

  deleteArticleCommande(ligne: number, numero: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${ligne}/${numero}`);
  }

  updateArticleCommande(ligne: number, numero: number, articleCommande: ArticleCommande): Observable<ArticleCommande> {
    return this.http.put<ArticleCommande>(`${this.apiUrl}/${ligne}/${numero}`, articleCommande);
  }
}
