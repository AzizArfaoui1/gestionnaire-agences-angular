import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  employeformupdate!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private router: ActivatedRoute
  ) {
    this.employeformupdate = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z]+$/)]],
      prenom: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z]+$/)]],
      fonction: ['', [Validators.required]],
      siege: [''],
      immeuble: [''],
      direction: ['', [Validators.required]],
      agence: ['', [Validators.required]],
      numin: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
      numex: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]]
    });
  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    
    // Fetch employe data and populate the form
    this.service.getemployebyid(this.router.snapshot.params['id']).subscribe((result) => {
      this.employeformupdate.patchValue(result);
    });
  }

  Update() {
    console.log(this.employeformupdate.value);
    this.service.updateemployedata(this.router.snapshot.params['id'], this.employeformupdate.value).subscribe(( result)=>{
      console.log( result );
      alert("Employe Updated !");
    });
  }
}
