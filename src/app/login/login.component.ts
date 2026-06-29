import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  jsonData: any; // variable to store JSON data

  constructor(
    private dataService: ServiceService,
    private router: Router
    ) {
    
  }
  

  proceedLogin(username: string, password: string) {
    console.log('Username:', username); // Log username to check if it's correct
    console.log('Password:', password); // Log password to check if it's correct
  
    // Assuming your service method is getUser, modify it as needed
    this.dataService.getUser(username, password).subscribe(
      (userData) => {
        console.log('User Data:', userData); // Log the user data to check if it's retrieved
  
        // Check if userData exists and has the expected properties
        if (userData && userData.nom) {
          // User is authenticated, get user role
          this.dataService.getUserRole(username).subscribe(
            (role) => {
              console.log('Role:', role); // Log the role to check if it's retrieved
  
              if (role === 'admin') {
                // Navigate to the admin page
                this.router.navigate(['/home']);
              } else {
                // Handle other roles or unexpected cases
                console.log('Unknown role or unexpected case');
              }
            },
            (roleError) => {
              console.error('Error getting user role:', roleError);
            }
          );
        } else {
          // Authentication failed, handle the logic (e.g., show an error message)
          console.log('Authentication failed');
        }
      },
      (userError) => {
        console.error('Error getting user data:', userError);
      }
    );
  }

}