import { Component, OnInit } from '@angular/core';
import { Magasin } from '../personne.model';
import { MagasinService } from '../magasin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'modif-magasin',
  templateUrl: './modif-magasin.component.html',
  styleUrls: ['./modif-magasin.component.css']
})
export class ModifMagasinComponent implements OnInit {
  
  id: number=0;
  magasin: Magasin = new Magasin();
  constructor(private magasinService: MagasinService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  this.magasinService.getMagasin(this.id).subscribe(data => {
    this.magasin = data;
  }, error => console.log(error));
}

onSubmit(){
  this.magasinService.updateMagasin(this.id, this.magasin).subscribe( data =>{
    this.goToMagasinList();
  }
  , error => console.log(error));
}

goToMagasinList(){
  this.router.navigate(['/magasins']);
}


}
