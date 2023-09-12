import { Component, OnInit } from '@angular/core';
import { Marque } from '../personne.model';
import { MarqueService } from '../marque.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ajout-marque',
  templateUrl: './ajout-marque.component.html',
  styleUrls: ['./ajout-marque.component.css']
})
export class AjoutMarqueComponent implements OnInit {
  marque: Marque = new Marque();
  constructor(private router: Router, 
    private marqueService: MarqueService) {  }
  ngOnInit(): void {
      
  }
  saveMarque(){
    this.marqueService.ajoutMarque(this.marque).subscribe( data =>{
      console.log(data);
      this.goToMarqueList();
    },
    error => console.log(error));
  }

  goToMarqueList(){
    this.router.navigate(['/marques']);
  }
  
  onSubmit(){
    console.log(this.marque);
    this.saveMarque();
  }
}
