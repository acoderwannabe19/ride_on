import { Component, OnInit } from '@angular/core';
import { Employe, Magasin } from '../personne.model';
import { EmployeService } from '../employe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MagasinService } from '../magasin.service';

@Component({
  selector: 'ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.css']
})
export class AjoutEmployeComponent implements OnInit { 
  employe: Employe = new Employe();
  employes: Employe[] = [];
  magasins: Magasin[] = [];
  

  constructor(private employeService: EmployeService, 
    private magasinService: MagasinService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.employeService.getEmployesList().subscribe(employes => {
      this.employes = employes;
    });
    
    this.magasinService.getMagasinsList().subscribe(magasins => {
      this.magasins = magasins;
    });

}

onMagasinChange(value: any) {
    this.employe.magasinId.id = value;
  }

onManagerChange(value: any) {
  this.employe.managerId!.id = value;
}

onSubmit() {
  this.employeService.ajoutEmploye(this.employe).subscribe(
    data => {
      this.goToEmployeList();
    },
    error => console.log('Error creating employee:', error)
  )
  
}


goToEmployeList(){
  this.router.navigate(['/employes']);
}
}
