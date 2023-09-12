import { Component, OnInit } from '@angular/core';
import { Client } from '../personne.model';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {
  client: Client = new Client();
  constructor(private router: Router, private clientService: ClientService) {  }
  ngOnInit(): void {
      
  }
  saveClient(){
    this.clientService.ajoutClient(this.client).subscribe( data =>{
      console.log(data);
      this.goToClientList();
    },
    error => console.log(error));
  }

  goToClientList(){
    this.router.navigate(['/clients']);
  }
  
  onSubmit(){
    console.log(this.client);
    this.saveClient();
  }
}
