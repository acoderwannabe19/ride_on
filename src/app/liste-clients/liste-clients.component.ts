import { Component } from '@angular/core';
import { Client } from '../personne.model';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent {
  clients: Client[] = [];
  

  constructor(private clientService: ClientService, private router: Router) { }
  

  ngOnInit() {
    this.clientService.getClientsList().subscribe(clients => {
      this.clients = clients;
    });
  }

  private getClients(){
    this.clientService.getClientsList().subscribe(data => {
      this.clients = data;
    });
  }

  updateClient(id: number){
    this.router.navigate(['modif-client', id]);
  }

  ajoutClient(){
    this.router.navigate(['ajout-client']);
  }

  deleteClient(id: number){
    this.clientService.deleteClient(id).subscribe( data => {
      console.log(data);
      this.getClients();
    })
  }

}
