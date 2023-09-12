import { Component, OnInit } from '@angular/core';
import { Employe } from '../personne.model';
import { EmployeService } from '../employe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Magasin } from '../personne.model';
import { MagasinService } from '../magasin.service';

@Component({
  selector: 'modif-employe',
  templateUrl: './modif-employe.component.html',
  styleUrls: ['./modif-employe.component.css']
})
export class ModifEmployeComponent implements OnInit {
  id: number=0;
  employe: Employe = new Employe();
  employes: Employe[] = [];
  magasins: Magasin[] = [];

  constructor(private employeService: EmployeService, 
    private magasinService: MagasinService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.employeService.getEmployesList().subscribe(employes => {
      this.employes = employes;
    });
    
    this.magasinService.getMagasinsList().subscribe(magasins => {
      this.magasins = magasins;
    });

    this.employeService.getEmploye(this.id).subscribe(data => {
      this.employe = data;
    }, error => console.log(error));
}

onMagasinChange(value: any) {
    this.employe.magasinId.id = value;
  }

onManagerChange(value: any) {
  this.employe.managerId!.id = value;
}

onSubmit() {
  this.employeService.updateEmploye(this.id, this.employe).subscribe(
    data => {
      this.goToEmployeList();
    },
    error => console.log('Error updating employee:', error)
  )
  
}


goToEmployeList(){
  this.router.navigate(['/employes']);
}


}
