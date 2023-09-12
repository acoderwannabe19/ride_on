import { Component, OnInit } from '@angular/core';
import { ArticleCommande, Commande, Produit } from '../personne.model';
import { ArticleCommandeService } from '../article-commande.service';
import { ProduitService } from '../produit.service';
import { CommandeService } from '../commande.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modif-article-commande',
  templateUrl: './modif-article-commande.component.html',
  styleUrls: ['./modif-article-commande.component.css']
})
export class ModifArticleCommandeComponent implements OnInit {
  
  numeroCommande: number=0;
  ligne: number=0;
  articleCommande: ArticleCommande = new ArticleCommande();
  produits: Produit[] = [];
  commandes:Commande[] = [];
  

  constructor(private produitService: ProduitService, 
    private articleCommandeService: ArticleCommandeService,
    private commandeService: CommandeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.ligne = this.route.snapshot.params['ligne'];
    this.numeroCommande = this.route.snapshot.params['numeroCommande']
    
    this.produitService.getProduitsList().subscribe(produits => {
      this.produits = produits;
    });
    

    this.commandeService.getCommandesList().subscribe(commandes => {
      this.commandes = commandes;
    });

    this.articleCommandeService.getArticleCommande(this.ligne, this.numeroCommande).subscribe(data => {
      this.articleCommande = data;
    }, error => console.log(error));
}

onCommandeChange(value: any) {
    this.articleCommande.numeroCommande.numero = value;
  }

onProduitChange(value: any) {
  this.articleCommande.produitId.id = value;

}

onSubmit() {
  this.articleCommandeService.updateArticleCommande(this.ligne, this.numeroCommande, this.articleCommande).subscribe(
    data => {
      this.goToArticleCommandesList();
    },
    error => console.log('Error updating employee:', error)
  )


}

goToArticleCommandesList(){
  this.router.navigate(['/articlesCommandes']);
}

}

