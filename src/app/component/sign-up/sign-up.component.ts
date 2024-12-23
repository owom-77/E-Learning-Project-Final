import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../service/auth-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  registration = {
    firstName: '',
    lastName: '',
    motherName: '',
    fatherName: '',
    address: '',
    gender: '',
    state: '',
    city: '',
    dob: '',
    pincode: '',
    course: '',
    email: '',
    password: '',
  };

  registrationData: any[] = [];

  constructor(private authService: AuthServiceService, private router: Router) {}

  onSubmit() {
    console.log('Registration Data:', this.registration);
    
    this.authService.register(this.registration).subscribe(
      (response) => {
        this.registrationData.push(response);
        alert('Registration successful!');
        this.router.navigate(['/login']); 
      },
      (error) => {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
      }
    );
  }

  onReset() {
    this.registration = {
      firstName: '',
      lastName: '',
      motherName: '',
      fatherName: '',
      address: '',
      gender: '',
      state: '',
      city: '',
      dob: '',
      pincode: '',
      course: '',
      email: '',
      password: '',
    };
  }
}
