import { Component, OnInit } from '@angular/core';
import { ArticleCommande } from '../personne.model';
import { Router } from '@angular/router';
import { ArticleCommandeService } from '../article-commande.service';

@Component({
  selector: 'app-liste-articlesCommande',
  templateUrl: './liste-articles-commande.component.html',
  styleUrls: ['./liste-articles-commande.component.css']
})
export class ListeArticlesCommandeComponent implements OnInit{
  articlesCommande: ArticleCommande[] = [];
  

  constructor(private articleCommandeService: ArticleCommandeService, private router: Router) { }
  

  ngOnInit() {
    this.articleCommandeService.getArticlesCommandeList().subscribe(articlesCommande => {
      this.articlesCommande = articlesCommande;
    });
  }

  private getArticlesCommande(){
    this.articleCommandeService.getArticlesCommandeList().subscribe(data => {
      this.articlesCommande = data;
    });
  }

  updateArticleCommande(ligne: number, numero: number){
    this.router.navigate(['modif-articleCommande', ligne, numero]);
  }

  ajoutArticleCommande(){
    this.router.navigate(['ajout-articleCommande']);
  }

  deleteArticleCommande(ligne: number, numero: number){
    this.articleCommandeService.deleteArticleCommande(ligne, numero).subscribe( data => {
      console.log(data);
      this.getArticlesCommande();
    })
  }

}
