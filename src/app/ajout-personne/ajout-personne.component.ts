import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne.model';
import { PersonneService } from '../personne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ajout-personne',
  templateUrl: './ajout-personne.component.html',
  styleUrls: ['./ajout-personne.component.css']
})
export class AjoutPersonneComponent implements OnInit {
  personne: Personne = new Personne();
  constructor(private router: Router, private personneService: PersonneService) {  }
  ngOnInit(): void {
      
  }
  savePersonne(){
    this.personneService.ajoutPersonne(this.personne).subscribe( data =>{
      console.log(data);
      this.goToPersonneList();
    },
    error => console.log(error));
  }

  goToPersonneList(){
    this.router.navigate(['/personnes']);
  }
  
  onSubmit(){
    console.log(this.personne);
    this.savePersonne();
  }
}
