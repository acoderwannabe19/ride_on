import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AjoutPersonneComponent } from './ajout-personne/ajout-personne.component';
import { ModifPersonneComponent } from './modif-personne/modif-personne.component';
import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { PersonneService } from './personne.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListeMagasinsComponent } from './liste-magasins/liste-magasins.component';
import { AjoutMagasinComponent } from './ajout-magasin/ajout-magasin.component';
import { ModifMagasinComponent } from './modif-magasin/modif-magasin.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { ModifClientComponent } from './modif-client/modif-client.component';
import { ClientService } from './client.service';
import { ModifEmployeComponent } from './modif-employe/modif-employe.component';
import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import { ListeEmployesComponent } from './liste-employes/liste-employes.component';
import { EmployeService } from './employe.service';
import { MagasinService } from './magasin.service';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { ModifMarqueComponent } from './modif-marque/modif-marque.component';
import { AjoutMarqueComponent } from './ajout-marque/ajout-marque.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';
import { ModifStockComponent } from './modif-stock/modif-stock.component';
import { AjoutStockComponent } from './ajout-stock/ajout-stock.component';
import { ListeStocksComponent } from './liste-stocks/liste-stocks.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ModifProduitComponent } from './modif-produit/modif-produit.component';
import { ModifCommandeComponent } from './modif-commande/modif-commande.component';
import { AjoutCommandeComponent } from './ajout-commande/ajout-commande.component';
import { ListeCommandesComponent } from './liste-commandes/liste-commandes.component';
import { ListeArticlesCommandeComponent } from './liste-articles-commande/liste-articles-commande.component';
import { AjoutArticleCommandeComponent } from './ajout-article-commande/ajout-article-commande.component';
import { ModifArticleCommandeComponent } from './modif-article-commande/modif-article-commande.component';
import { CategorieService } from './categorie.service';
import { ProduitService } from './produit.service';
import { StockService } from './stock.service';
import { CommandeService } from './commande.service';
import { ArticleCommandeService } from './article-commande.service';
import { MarqueService } from './marque.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  
  declarations: [
    AppComponent,
    AjoutPersonneComponent,
    ModifPersonneComponent,
    ListePersonnesComponent,
    ListeMagasinsComponent,
    AjoutMagasinComponent,
    ModifMagasinComponent,
    ListeClientsComponent,
    AjoutClientComponent,
    ModifClientComponent,
    ModifEmployeComponent,
    AjoutEmployeComponent,
    ListeEmployesComponent,
    ListeMarquesComponent,
    ModifMarqueComponent,
    AjoutMarqueComponent,
    ListeCategoriesComponent,
    AjoutCategorieComponent,
    ModifCategorieComponent,
    ModifStockComponent,
    AjoutStockComponent,
    ListeStocksComponent,
    ListeProduitsComponent,
    AjoutProduitComponent,
    ModifProduitComponent,
    ModifCommandeComponent,
    AjoutCommandeComponent,
    ListeCommandesComponent,
    ListeArticlesCommandeComponent,
    AjoutArticleCommandeComponent,
    ModifArticleCommandeComponent,
    AccueilComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    IonicModule.forRoot()
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [PersonneService, 
    ClientService, 
    EmployeService, 
    MagasinService,
    MarqueService, 
    CategorieService,
    ProduitService,
    StockService,
    CommandeService,
    ArticleCommandeService,

    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
