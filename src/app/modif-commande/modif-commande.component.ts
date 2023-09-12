import { Component, OnInit } from '@angular/core';
import { Client, Commande, Employe, Magasin } from '../personne.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from '../employe.service';
import { MagasinService } from '../magasin.service';
import { ClientService } from '../client.service';
import { CommandeService } from '../commande.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-modif-commande',
  templateUrl: './modif-commande.component.html',
  styleUrls: ['./modif-commande.component.css']
})
export class ModifCommandeComponent implements OnInit {
  numero: number=0;
  commande: Commande = new Commande();
  employes: Employe[] = [];
  clients: Client[] = [];
  magasins: Magasin[] = [];

  constructor(private employeService: EmployeService, 
    private clientService: ClientService,
    private magasinService: MagasinService,
    private commandeService: CommandeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.numero = this.route.snapshot.params['numero'];
    
    this.employeService.getEmployesList().subscribe(employes => {
      this.employes = employes;
    });
    
    this.magasinService.getMagasinsList().subscribe(magasins => {
      this.magasins = magasins;
    });

    this.clientService.getClientsList().subscribe(clients => {
      this.clients = clients;
    });

    this.commandeService.getCommande(this.numero).subscribe(data => {
      this.commande = data;
    }, error => console.log(error));
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

onClientChange(value: any) {
  this.commande.clientId!.id = value;
}

onSellerChange(value: any) {
  this.commande.vendeurId!.id = value;
}

onSubmit() {
  this.commandeService.updateCommande(this.numero, this.commande).subscribe(
    data => {
      this.goToCommandesList();
    },
    error => console.log('Error updating order:', error)
  )
  
}


goToCommandesList(){
  this.router.navigate(['/commandes']);
}


}
