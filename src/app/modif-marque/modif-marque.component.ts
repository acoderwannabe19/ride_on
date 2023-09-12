import { Component, OnInit } from '@angular/core';
import { AjoutMarqueComponent } from '../ajout-marque/ajout-marque.component';
import { Marque } from '../personne.model';
import { MarqueService } from '../marque.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'modif-marque',
  templateUrl: './modif-marque.component.html',
  styleUrls: ['./modif-marque.component.css']
})
export class ModifMarqueComponent implements OnInit {
  id: number=0;
  marque: Marque = new Marque();
  constructor(private marqueService: MarqueService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  this.marqueService.getMarque(this.id).subscribe(data => {
    this.marque = data;
  }, error => console.log(error));
}

onSubmit(){
  this.marqueService.updateMarque(this.id, this.marque).subscribe( 
    data =>{
    this.goToMarqueList();
  }
  , error => console.log(error));
}

goToMarqueList(){
  this.router.navigate(['/marques']);
}


}
