import { Component, OnInit } from '@angular/core';
import { Client, Commande, Employe, Magasin } from '../personne.model';
import { EmployeService } from '../employe.service';
import { MagasinService } from '../magasin.service';
import { ClientService } from '../client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommandeService } from '../commande.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-ajout-commande',
  templateUrl: './ajout-commande.component.html',
  styleUrls: ['./ajout-commande.component.css']
})
export class AjoutCommandeComponent implements OnInit {

  commande: Commande = new Commande();
  
  clients: Client[] = [];
  employes: Employe[] = [];
  magasins: Magasin[] = [];

  constructor(private employeService: EmployeService, 
    private magasinService: MagasinService,
    private clientService: ClientService,
    private commandeService: CommandeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.employeService.getEmployesList().subscribe(employes => {
      this.employes = employes;
    });
    
    this.magasinService.getMagasinsList().subscribe(magasins => {
      this.magasins = magasins;
    });

    this.clientService.getClientsList().subscribe(clients => {
      this.clients = clients;
    });


}

onDateCommandeChange(event: MatDatepickerInputEvent<Date>) {
  this.commande.dateCommande = event.value;
}

onDateLivraisonChange(event: MatDatepickerInputEvent<Date>) {
  this.commande.dateLivraison = event.value;
}

onDateLivraisonVoulueChange(event: MatDatepickerInputEvent<Date>) {
  this.commande.dateLivraisonVoulue = event.value;
}

onMagasinChange(value: any) {
    this.commande.magasinId.id = value;
  }

onSellerChange(value: any) {
  this.commande.vendeurId!.id = value;
}

onClientChange(value: any) { 
  this.commande.clientId!.id = value;
}

onSubmit() {
  this.commandeService.ajoutCommande(this.commande).subscribe(
    data => {
      this.goToCommandeList();
    },
    error => console.log('Error creating order:', error)
  )
  
}


goToCommandeList(){
  this.router.navigate(['/commandes']);
}



}
