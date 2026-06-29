import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-directionadd',
  templateUrl: './directionadd.component.html',
  styleUrl: './directionadd.component.css'
})
export class DirectionaddComponent {
  employeform!:FormGroup
constructor(private fb:FormBuilder,private service:ServiceService){
  this.employeform = this.fb.group({
    
    nom: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]+$/)]],
    prenom: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]+$/)]],
    fonction: ['', [Validators.required]],
    siege: [''],
    immeuble: [''],
    direction: ['', [Validators.required]],
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
