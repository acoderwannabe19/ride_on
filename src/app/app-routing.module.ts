import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AjoutPersonneComponent } from './ajout-personne/ajout-personne.component';
import { ModifPersonneComponent } from './modif-personne/modif-personne.component';
import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { PersonneService } from './personne.service';

import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { ModifClientComponent } from './modif-client/modif-client.component'; 
import { ListeClientsComponent } from './liste-clients/liste-clients.component';

import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import { ModifEmployeComponent } from './modif-employe/modif-employe.component';
import { ListeEmployesComponent } from './liste-employes/liste-employes.component';

import { AjoutMagasinComponent } from './ajout-magasin/ajout-magasin.component';
import { ModifMagasinComponent } from './modif-magasin/modif-magasin.component';
import { ListeMagasinsComponent } from './liste-magasins/liste-magasins.component';

import { AjoutArticleCommandeComponent } from './ajout-article-commande/ajout-article-commande.component';
import { ModifArticleCommandeComponent } from './modif-article-commande/modif-article-commande.component';
import { ListeArticlesCommandeComponent } from './liste-articles-commande/liste-articles-commande.component';

import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';

import { AjoutMarqueComponent } from './ajout-marque/ajout-marque.component';
import { ModifMarqueComponent } from './modif-marque/modif-marque.component';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';

import { AjoutStockComponent } from './ajout-stock/ajout-stock.component';
import { ModifStockComponent } from './modif-stock/modif-stock.component';
import { ListeStocksComponent } from './liste-stocks/liste-stocks.component';

import { AjoutCommandeComponent } from './ajout-commande/ajout-commande.component';
import { ModifCommandeComponent } from './modif-commande/modif-commande.component';
import { ListeCommandesComponent } from './liste-commandes/liste-commandes.component';

import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ModifProduitComponent } from './modif-produit/modif-produit.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  { path: 'personnes', component: ListePersonnesComponent },
  {path: 'ajout-personne', component: AjoutPersonneComponent},
  {path: '', redirectTo: 'personnes', pathMatch: 'full'},
  {path: 'modif-personne/:id', component: ModifPersonneComponent},

  { path: 'clients', component: ListeClientsComponent },
  {path: 'ajout-client', component: AjoutClientComponent},
  {path: '', redirectTo: 'clients', pathMatch: 'full'},
  {path: 'modif-client/:id', component: ModifClientComponent},

  { path: 'employes', component: ListeEmployesComponent },
  {path: 'ajout-employe', component: AjoutEmployeComponent},
  {path: '', redirectTo: 'employes', pathMatch: 'full'},
  {path: 'modif-employe/:id', component: ModifEmployeComponent},

  { path: 'magasins', component: ListeMagasinsComponent },
  {path: 'ajout-magasin', component: AjoutMagasinComponent},
  {path: '', redirectTo: 'magasins', pathMatch: 'full'},
  {path: 'modif-magasin/:id', component: ModifMagasinComponent},

  { path: 'marques', component: ListeMarquesComponent },
  {path: 'ajout-marque', component: AjoutMarqueComponent},
  {path: '', redirectTo: 'marques', pathMatch: 'full'},
  {path: 'modif-marque/:id', component: ModifMarqueComponent},

  { path: 'categories', component: ListeCategoriesComponent },
  {path: 'ajout-categorie', component: AjoutCategorieComponent},
  {path: '', redirectTo: 'categories', pathMatch: 'full'},
  {path: 'modif-categorie/:id', component: ModifCategorieComponent},

  { path: 'stocks', component: ListeStocksComponent },
  {path: 'ajout-stock', component: AjoutStockComponent},
  {path: '', redirectTo: 'stocks', pathMatch: 'full'},
  {path: 'modif-stock/:magasin/:produit', component: ModifStockComponent},

  { path: 'produits', component: ListeProduitsComponent },
  {path: 'ajout-produit', component: AjoutProduitComponent},
  {path: '', redirectTo: 'produits', pathMatch: 'full'},
  {path: 'modif-produit/:id', component: ModifProduitComponent},

  { path: 'articlesCommandes', component: ListeArticlesCommandeComponent },
  {path: 'ajout-articleCommande', component: AjoutArticleCommandeComponent},
  {path: '', redirectTo: 'articleCommandes', pathMatch: 'full'},
  {path: 'modif-articleCommande/:ligne/:numeroCommande', component: ModifArticleCommandeComponent},

  { path: 'commandes', component: ListeCommandesComponent },
  {path: 'ajout-commande', component: AjoutCommandeComponent},
  {path: '', redirectTo: 'commandes', pathMatch: 'full'},
  {path: 'modif-commande/:numero', component: ModifCommandeComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,],
  providers: [PersonneService]
})
export class AppRoutingModule { }
