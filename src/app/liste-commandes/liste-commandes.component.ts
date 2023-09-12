import { Component, OnInit } from '@angular/core';
import { Commande } from '../personne.model';
import { Router } from '@angular/router';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.css']
})
export class ListeCommandesComponent implements OnInit {
  commandes: Commande[] = [];
  

  constructor(private commandeService: CommandeService, private router: Router) { }
  

  ngOnInit() {
    this.commandeService.getCommandesList().subscribe(commandes => {
      this.commandes = commandes;
    });
  }

  private getCommandes(){
    this.commandeService.getCommandesList().subscribe(data => {
      this.commandes = data;
    });
  }

  updateCommande(numero: number){
    this.router.navigate(['modif-commande', numero]);
  }

  ajoutCommande(){
    this.router.navigate(['ajout-commande']);
  }

  deleteCommande(numero: number){
    this.commandeService.deleteCommande(numero).subscribe( data => {
      console.log(data);
      this.getCommandes();
    })
  }

}
