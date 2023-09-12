import { Component, OnInit } from '@angular/core';
import { Magasin } from '../personne.model';
import { MagasinService } from '../magasin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ajout-magasin',
  templateUrl: './ajout-magasin.component.html',
  styleUrls: ['./ajout-magasin.component.css']
})
export class AjoutMagasinComponent implements OnInit {
  magasin: Magasin = new Magasin();
  constructor(private router: Router, private magasinService: MagasinService) {  }
  ngOnInit(): void {
      
  }
  saveMagasin(){
    this.magasinService.ajoutMagasin(this.magasin).subscribe( data =>{
      console.log(data);
      this.goToMagasinList();
    },
    error => console.log(error));
  }

  goToMagasinList(){
    this.router.navigate(['/magasins']);
  }
  
  onSubmit(){
    console.log(this.magasin);
    this.saveMagasin();
  }
}
