import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-employeform',
  templateUrl: './employeform.component.html',
  styleUrl: './employeform.component.css'
})
export class EmployeformComponent {
  employeform!:FormGroup
constructor(private fb:FormBuilder,private service:ServiceService){
  this.employeform = this.fb.group({
    
    nom: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z]+$/)]],
    prenom: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z]+$/)]],
    fonction: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z]+$/)]],
    siege: [''],
    immeuble: ['',Validators.required],
    direction: ['', Validators.required],
    agence: ['', [Validators.required]],
    numin: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
    numex: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]]
  })
}
  
 
  
Ajouter() {
  if (this.employeform.valid) {
    alert("L'activité est ajoutée !");
    this.service.createemploye(this.employeform.value).subscribe(data => {
    });
  } else {
    alert('Veuillez remplir correctement tous les champs.');
  }
}
}
