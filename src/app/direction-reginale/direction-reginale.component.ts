import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-direction-reginale',
  templateUrl: './direction-reginale.component.html',
  styleUrl: './direction-reginale.component.css'
})
export class DirectionReginaleComponent implements OnInit{
  employes: any[] = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getemploye().subscribe(data => {
      this.employes = data;
    });
  }

  hasMatchingEmploye(direction: string): boolean {
    return this.employes.some(
      employe => employe.direction === direction && employe.siege == false
    );
  }

  getDistinctDirections(): string[] {
    // Assuming employe has a property called direction
    const directionsSet = new Set(this.employes.map(employe => employe.direction));
    return Array.from(directionsSet);
  }

  getEmployesByDirection(direction: string): any[] {
    return this.employes.filter(
      employe =>
        employe.direction === direction &&
        employe.siege == false &&
        employe.immeuble !== 'chargueya' &&
        employe.immeuble !== 'mohamed 5'
    );
  }
  deleteemployee(employe_id: any){
    this.service.deleteemployee(employe_id).subscribe(( result )=>{
      this.ngOnInit()
    })
  }
}
