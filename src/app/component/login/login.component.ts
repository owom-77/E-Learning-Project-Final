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
        adminId: this.adminId,
        email: this.email,
        password: this.password,
        
      };
      console.log('Admin Login Data:', adminLoginData);

      this.authService.adminLogin(adminLoginData).subscribe({
        next: (response) => {
          if (response.success=="true") {
            console.log(response)
            //alert(`Welcome, Admin ${response.user.firstName}!`);
          } else {
            this.errorMessage = response.message;
            this.router.navigate(['/admindashborad']);

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
          if (response) {
           // alert(`Welcome, ${response.user.firstName}!`);
            this.router.navigate(['/userdashborad']);
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
