import { Component, OnInit } from '@angular/core';
import { Categorie } from '../personne.model';
import { CategorieService } from '../categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.css']
})
export class AjoutCategorieComponent implements OnInit {
  categorie: Categorie = new Categorie();
  constructor(private router: Router, private categorieService: CategorieService) {  }
  ngOnInit(): void {
      
  }
  saveCategorie(){
    this.categorieService.ajoutCategorie(this.categorie).subscribe( data =>{
      console.log(data);
      this.goToCategorieList();
    },
    error => console.log(error));
  }

  goToCategorieList(){
    this.router.navigate(['/categories']);
  }
  
  onSubmit(){
    console.log(this.categorie);
    this.saveCategorie();
  }
}
