import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Commande, Produit, ArticleCommande } from '../personne.model';
import { CommandeService } from '../commande.service';
import { ArticleCommandeService } from '../article-commande.service'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajout-article-commande',
  templateUrl: './ajout-article-commande.component.html',
  styleUrls: ['./ajout-article-commande.component.css']
})
export class AjoutArticleCommandeComponent implements OnInit {
  articleCommande: ArticleCommande = new ArticleCommande();
  commandes: Commande[] = [];
  produits: Produit[] = [];

  constructor( 
    private articleCommandeService:ArticleCommandeService,
    private produitService: ProduitService,
    private commandeService: CommandeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.commandeService.getCommandesList().subscribe(commandes => {
      this.commandes = commandes;
    });
    
    this.produitService.getProduitsList().subscribe(produits => {
      this.produits = produits;
    });

    
}


onCommandeChange(value: any) {
    this.articleCommande.numeroCommande.numero = value;
  }

onProduitChange(value: any) {
  this.articleCommande.produitId.id = value;
}


onSubmit() {
  this.articleCommandeService.ajoutArticleCommande(this.articleCommande).subscribe(
    data => {
      this.goToCommandeList();
    },
    error => console.log('Error updating order:', error)
  )
  
}


goToCommandeList(){
  this.router.navigate(['/articlesCommandes']);
}



}
