import { Component } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isAdmin: boolean = false; 
  adminId: string = ''; 

  constructor(private authService: AuthServiceService, private router: Router) {}

  onLogin() {
    if (this.isAdmin) {
      const adminLoginData = {
        email: this.email,
        password: this.password,
        adminId: this.adminId,
      };
      console.log('Admin Login Data:', adminLoginData);

      this.authService.adminLogin(adminLoginData).subscribe({
        next: (response) => {
          if (response.success) {
            alert(`Welcome, Admin ${response.user.firstName}!`);
            this.router.navigate(['/admindashboard']);
          } else {
            this.errorMessage = response.message;
          }
        },
        error: (error) => {
          this.errorMessage = 'Admin login failed. Please try again.';
          console.error(error);
        },
      });
    } else {
      const userLoginData = {
        email: this.email,
        password: this.password,
      };

      console.log('User Login Data:', userLoginData);

      this.authService.login(userLoginData).subscribe({
        next: (response) => {
          if (response.success) {
            alert(`Welcome, ${response.user.firstName}!`);
            this.router.navigate(['/userdashboard']);
          } else {
            this.errorMessage = response.message;
          }
        },
        error: (error) => {
          this.errorMessage = 'User login failed. Please try again.';
          console.error(error);
        },
      });
    }
  }
}
