import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-immeubles',
  templateUrl: './immeubles.component.html',
  styleUrl: './immeubles.component.css'
})
export class ImmeublesComponent implements OnInit{
  employes: any[] = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getemploye().subscribe(data => {
      this.employes = data;
    });
  }

  hasMatchingEmploye(immeuble: string): boolean {
    return this.employes.some(
      employe => employe.immeuble === immeuble
    );
  }

  getDistinctImmeubles(): string[] {
    // Assuming employe has a property called direction
    const immeublesSet = new Set(this.employes.map(employe => employe.immeuble));
    return Array.from(immeublesSet);
  }

  getEmployesByImmeuble(immeuble: string): any[] {
    return this.employes.filter(employe => employe.immeuble === immeuble && employe.immeuble !== "");
  }
  deleteemployee(employe_id: any){
    this.service.deleteemployee(employe_id).subscribe(( result )=>{
      this.ngOnInit()
    })
  }
}
