import { Component, OnInit } from '@angular/core';
import { MarqueService } from '../marque.service';
import { Marque } from '../personne.model';
import { Router } from '@angular/router';

@Component({
  selector: 'liste-marques',
  templateUrl: './liste-marques.component.html',
  styleUrls: ['./liste-marques.component.css']
})
export class ListeMarquesComponent implements OnInit {
  marques: Marque[] = [];
  

  constructor(private marqueService: MarqueService, private router: Router) { }
  

  ngOnInit() {
    this.marqueService.getMarquesList().subscribe(marques => {
      this.marques = marques;
    });
  }

  private getMarques(){
    this.marqueService.getMarquesList().subscribe(data => {
      this.marques = data;
    });
  }

  updateMarque(id: number){
    this.router.navigate(['modif-marque', id]);
  }

  ajoutMarque(){
    this.router.navigate(['ajout-marque']);
  }

  deleteMarque(id: number){
    this.marqueService.deleteMarque(id).subscribe( data => {
      console.log(data);
      this.getMarques();
    })
  }
}
