import { Component } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private authService: AuthServiceService, private router: Router) {}

  onSubmit(event: Event): void {
    event.preventDefault(); 
    if (this.authService.isLoggedIn()) {
      this.sendMessage();
    } else {
      this.errorMessage = 'You must be logged in to send a message.';
      this.router.navigate(['/login']);
    }
  }

  sendMessage(): void {
    this.authService.sendEmail(this.name, this.email, this.message).subscribe({
      next: () => {
        this.successMessage = 'Your message has been sent successfully!';
        this.errorMessage = null;

        this.name = '';
        this.email = '';
        this.message = '';
      },
      error: (err) => {
        this.errorMessage = 'Failed to send the message. Please try again later.';
        console.error(err);
      },
    });
  }
}
