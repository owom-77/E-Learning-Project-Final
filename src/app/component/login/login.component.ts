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
  isAdmin: boolean = false;  // Track the login type (admin or user)
  adminId: string = '';  // Track the Admin ID

  constructor(private authService: AuthServiceService, private router: Router) {}

  // Handle login form submission
  onLogin() {
    // Construct login data based on the admin/user selection
    const loginData = {
      email: this.email,
      password: this.password,
      userType: this.isAdmin ? 'admin' : 'user',
      adminId: this.isAdmin ? this.adminId : '', // Include adminId only if admin login
    };

    // Call the AuthService to login
    this.authService.login(loginData).subscribe({
      next: (response) => {
        if (response.success) {
          // Redirect based on the login type (admin or user)
          const redirectPath = this.isAdmin ? '/admindashboard' : '/userdashboard';
          alert(`Welcome, ${response.user.firstName}!`);
          this.router.navigate([redirectPath]);
        } else {
          // Handle error response
          this.errorMessage = response.message;
        }
      },
      error: (error) => {
        // Handle any unexpected errors
        this.errorMessage = 'An error occurred. Please try again.';
        console.error(error);
      },
    });
  }
}
