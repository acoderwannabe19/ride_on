import { Component, OnInit } from '@angular/core';
import { AjoutClientComponent } from '../ajout-client/ajout-client.component';
import { Client } from '../personne.model';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'modif-client',
  templateUrl: './modif-client.component.html',
  styleUrls: ['./modif-client.component.css']
})
export class ModifClientComponent implements OnInit {
  id: number=0;
  client: Client = new Client();
  constructor(private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  this.clientService.getClient(this.id).subscribe(data => {
    this.client = data;
  }, error => console.log(error));
}

onSubmit(){
  this.clientService.updateClient(this.id, this.client).subscribe( data =>{
    this.goToClientList();
  }
  , error => console.log(error));
}

goToClientList(){
  this.router.navigate(['/clients']);
}


}
