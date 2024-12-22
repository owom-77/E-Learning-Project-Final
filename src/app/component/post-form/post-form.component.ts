import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../service/course-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  standalone: true, // Standalone component usage
  imports: [CommonModule, FormsModule], // Ensure CommonModule and FormsModule are imported
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  courseName: string = '';
  courseDescription: string = '';
  courseDuration: string = '';
  coursePrice: string = '';
  errorMessage: string = '';

  constructor(private courseService: CourseService, private router: Router) {}

  // Method to handle form submission
  onSubmit() {
    const newCourse = {
      name: this.courseName,
      description: this.courseDescription,
      duration: this.courseDuration,
      price: this.coursePrice,
    };

    this.courseService.createCourse(newCourse).subscribe({
      next: (response) => {
        if (response) {
          alert('Course successfully created!');
          this.router.navigate(['/admin-dashboard']); // Redirect to the admin dashboard
        } else {
          this.errorMessage = 'Failed to create course. Please try again.';
        }
      },
      error: (error) => {
        this.errorMessage = 'An error occurred. Please try again.';
        console.error(error);
      },
    });
  }
}
