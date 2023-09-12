import { Component, OnInit } from '@angular/core';
import { Employe } from '../personne.model';
import { Router } from '@angular/router';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-liste-employes',
  templateUrl: './liste-employes.component.html',
  styleUrls: ['./liste-employes.component.css']
})
export class ListeEmployesComponent implements OnInit {
  employes: Employe[] = [];
  

  constructor(private employeService: EmployeService, private router: Router) { }
  

  ngOnInit() {
    this.employeService.getEmployesList().subscribe(employes => {
      this.employes = employes;
    });
  }

  private getEmployes(){
    this.employeService.getEmployesList().subscribe(data => {
      this.employes = data;
    });
  }

  updateEmploye(id: number){
    this.router.navigate(['modif-employe', id]);
  }

  ajoutEmploye(){
    this.router.navigate(['ajout-employe']);
  }

  deleteEmploye(id: number){
    this.employeService.deleteEmploye(id).subscribe( data => {
      console.log(data);
      this.getEmployes();
    })
  }

}
