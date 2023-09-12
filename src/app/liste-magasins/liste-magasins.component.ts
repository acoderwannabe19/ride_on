import { Component, OnInit } from '@angular/core';
import { MagasinService } from '../magasin.service';
import { Magasin } from '../personne.model';
import { Router } from '@angular/router';

@Component({
  selector: 'liste-magasins',
  templateUrl: './liste-magasins.component.html',
  styleUrls: ['./liste-magasins.component.css']
})
export class ListeMagasinsComponent implements OnInit {
  magasins: Magasin[] = [];
  

  constructor(private magasinService: MagasinService, private router: Router) { }
  

  ngOnInit() {
    this.magasinService.getMagasinsList().subscribe(magasins => {
      this.magasins = magasins;
    });
  }

  private getMagasins(){
    this.magasinService.getMagasinsList().subscribe(data => {
      this.magasins = data;
    });
  }

  updateMagasin(id: number){
    this.router.navigate(['modif-magasin', id]);
  }

  ajoutMagasin(){
    this.router.navigate(['ajout-magasin']);
  }

  deleteMagasin(id: number){
    this.magasinService.deleteMagasin(id).subscribe( data => {
      console.log(data);
      this.getMagasins();
    })
  }
}
