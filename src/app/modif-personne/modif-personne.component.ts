import { Component, OnInit } from '@angular/core';
import { AjoutPersonneComponent } from '../ajout-personne/ajout-personne.component';
import { Personne } from '../personne.model';
import { PersonneService } from '../personne.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'modif-personne',
  templateUrl: './modif-personne.component.html',
  styleUrls: ['./modif-personne.component.css']
})
export class ModifPersonneComponent implements OnInit {
  id: number=0;
  personne: Personne = new Personne();
  constructor(private personneService: PersonneService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  this.personneService.getPersonne(this.id).subscribe(data => {
    this.personne = data;
  }, error => console.log(error));
}

onSubmit(){
  this.personneService.updatePersonne(this.id, this.personne).subscribe( data =>{
    this.goToPersonneList();
  }
  , error => console.log(error));
}

goToPersonneList(){
  this.router.navigate(['/personnes']);
}
}