import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../personne.service';
import { Personne } from '../personne.model';
import { Router } from '@angular/router';

@Component({
  selector: 'liste-personnes',
  templateUrl: './liste-personnes.component.html',
  styleUrls: ['./liste-personnes.component.css']
})
export class ListePersonnesComponent implements OnInit {
  personnes: Personne[] = [];
  

  constructor(private personneService: PersonneService, private router: Router) { }
  

  ngOnInit() {
    this.personneService.getPersonnesList().subscribe(personnes => {
      this.personnes = personnes;
    });
  }

  private getPersonnes(){
    this.personneService.getPersonnesList().subscribe(data => {
      this.personnes = data;
    });
  }

  updatePersonne(id: number){
    this.router.navigate(['modif-personne', id]);
  }

  ajoutPersonne(){
    this.router.navigate(['ajout-personne']);
  }

  deletePersonne(id: number){
    this.personneService.deletePersonne(id).subscribe( data => {
      console.log(data);
      this.getPersonnes();
    })
  }
}
