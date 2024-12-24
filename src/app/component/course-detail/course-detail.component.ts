import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { CourseService } from '../../service/course-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Course {
  name: string;
  description: string;
  price: number;
  id: number;
}

@Component({
  selector: 'app-course-detail',
  imports: [ActivatedRoute, CourseService,HttpClientModule,CommonModule],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  course: Course | null = null;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute, 
    private courseService: CourseService
  ) {}

  ngOnInit() {
    const courseId = Number(this.route.snapshot.paramMap.get('id')); // Get course ID from the URL
    this.getCourseDetails(courseId);
  }

  getCourseDetails(courseId: number) {
    this.courseService.getAllCourses().subscribe({
      next: (courses) => {
        this.course = courses.find(course => course.id === courseId) || null;
        if (!this.course) {
          this.errorMessage = 'Course not found.';
        }
      },
      error: (err) => {
        console.error('Error fetching course details:', err);
        this.errorMessage = 'Failed to load course details.';
      },
    });
  }
}
