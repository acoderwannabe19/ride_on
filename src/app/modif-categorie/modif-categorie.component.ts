import { Component, OnInit } from '@angular/core';
import { AjoutCategorieComponent } from '../ajout-categorie/ajout-categorie.component';
import { Categorie } from '../personne.model';
import { CategorieService } from '../categorie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'modif-categorie',
  templateUrl: './modif-categorie.component.html',
  styleUrls: ['./modif-categorie.component.css']
})
export class ModifCategorieComponent  implements OnInit {
  
  id: number=0;
  categorie: Categorie = new Categorie();
  constructor(private categorieService: CategorieService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  this.categorieService.getCategorie(this.id).subscribe(data => {
    this.categorie = data;
  }, error => console.log(error));
}

onSubmit(){
  this.categorieService.updateCategorie(this.id, this.categorie).subscribe( 
    data =>{
    this.goToCategorieList();
  }
  , error => console.log(error));
}

goToCategorieList(){
  this.router.navigate(['/categories']);
}



}
