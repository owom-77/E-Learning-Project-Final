import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent {
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() adminId: string = '';
}
