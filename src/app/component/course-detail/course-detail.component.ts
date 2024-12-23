import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../service/course-service.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  course: any; 
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.loadCourseDetail();
  }

  /**
   * Loads course details using the ID from the route parameters.
   */
  loadCourseDetail(): void {
    const courseId = this.route.snapshot.paramMap.get('id'); 
    if (courseId) {
      this.courseService.getCourseById(courseId).subscribe({
        next: (course) => {
          this.course = course;
        },
        error: (err) => {
          console.error('Error loading course details:', err);
          this.errorMessage = 'Unable to load course details. Please try again.';
        },
      });
    } else {
      this.errorMessage = 'Invalid course ID.';
    }
  }
}
