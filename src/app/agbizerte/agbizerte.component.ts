import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-agbizerte',
  templateUrl: './agbizerte.component.html',
  styleUrl: './agbizerte.component.css'
})
export class AgbizerteComponent implements OnInit{
  employes: any[] = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getemploye().subscribe(data => {
      this.employes = data;
    });
  }
  hasMatchingEmploye(agence: string): boolean {
    return this.employes.some(
      employe => employe.agence === agence && employe.direction === 'bizerte' && employe.siege === false
    );
  }

  getDistinctAgences(): string[] {
    // Assuming employe has a property called agence
    const agencesSet = new Set(this.employes.map(employe => employe.agence));
    return Array.from(agencesSet);
  }

  getEmployesByAgence(agence: string): any[] {
    return this.employes.filter(employe => employe.agence === agence);
  }
  deleteemployee(employe_id: any){
    this.service.deleteemployee(employe_id).subscribe(( result )=>{
      this.ngOnInit()
    })
  }
}
