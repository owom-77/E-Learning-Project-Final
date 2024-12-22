import { Component } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(private authService: AuthServiceService, private router: Router) {}

  onLogout(): void {
    this.authService.logout();
    
    this.router.navigate(['/login']);
  }
}
