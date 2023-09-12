import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { Categorie } from '../personne.model';
import { Router } from '@angular/router';

@Component({
  selector: 'liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrls: ['./liste-categories.component.css']
})
export class ListeCategoriesComponent implements OnInit {
  categories: Categorie[] = [];
  

  constructor(private categorieService: CategorieService, private router: Router) { }
  

  ngOnInit() {
    this.categorieService.getCategoriesList().subscribe(categories => {
      this.categories = categories;
    });
  }

  private getCategories(){
    this.categorieService.getCategoriesList().subscribe(data => {
      this.categories = data;
    });
  }

  updateCategorie(id: number){
    this.router.navigate(['modif-categorie', id]);
  }

  ajoutCategorie(){
    this.router.navigate(['ajout-categorie']);
  }

  deleteCategorie(id: number){
    this.categorieService.deleteCategorie(id).subscribe( data => {
      console.log(data);
      this.getCategories();
    })
  }
}
