import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-siege',
  templateUrl: './siege.component.html',
  styleUrl: './siege.component.css'
})
export class SiegeComponent implements OnInit{

  employes: any[] = [];

  constructor(private service: ServiceService) {}
  ngOnInit(): void {
    this.service.getemploye().subscribe(data => {
      this.employes = data;
    });
  }
  getEmployeesWithSiegeTrue(): any[] {
    return this.employes.filter(employe => employe.siege === true);
  }
  deleteemployee(employe_id: any){
    this.service.deleteemployee(employe_id).subscribe(( result )=>{
      this.ngOnInit()
    })
  }
}
