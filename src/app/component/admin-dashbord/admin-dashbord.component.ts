import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-admin-dashbord',
  standalone: true, 
  imports: [CommonModule,PostFormComponent], 
  templateUrl: './admin-dashbord.component.html',
  styleUrls: ['./admin-dashbord.component.scss']
})
export class AdminDashbordComponent {
  showPostForm: boolean = false; 

  togglePostForm() {
    this.showPostForm = !this.showPostForm;
    console.log('Post form visibility:', this.showPostForm); 
  }
}
