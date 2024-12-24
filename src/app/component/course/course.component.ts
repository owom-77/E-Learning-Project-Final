import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CourseService } from '../../service/course-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CourseDetailComponent } from '../course-detail/course-detail.component';

interface Course {
  name: string;
  description: string;
  price: number;
  id: number; 
}

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule,HttpClientModule,CourseDetailComponent],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  errorMessage: string | null = null;

  constructor(
    private courseService: CourseService,
    private router: Router 
  ) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getAllCourses().subscribe({
      next: (res) => {
        console.log('API Response:', res);
        this.courses = res; 
      },
      error: (err) => {
        console.error('Error fetching courses:', err);
        this.errorMessage = 'Failed to load courses. Please try again later.';
        this.courses = [];
      },
    });
  }

  viewCourseDetails(courseId: number) {
    this.router.navigate(['/course', courseId]);
  }
}
