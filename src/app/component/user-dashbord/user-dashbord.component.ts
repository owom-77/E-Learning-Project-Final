import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../service/course-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dashbord',
  imports : [CommonModule],
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.scss'],
})
export class UserDashbordComponent implements OnInit {
  purchasedCourses: any[] = [];
  allCourses: any[] = [];
  selectedCourse: any | null = null;
  isLoading = true;
  showAllCourses = false;
  showMyCourses = false;
  userId: string = ''; 

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = 'user-id'; 
    this.fetchAllCourses();
  }

  // Fetch all available courses (for "All Courses" link)
  fetchAllCourses(): void {
    this.courseService.getAllCourses().subscribe({
      next: (courses) => {
        this.allCourses = courses;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching all courses:', err);
        this.isLoading = false;
      },
    });
  }

  // Fetch purchased courses (for "My Courses" link)
  fetchPurchasedCourses(): void {
    this.courseService.getUserCourses(this.userId).subscribe({
      next: (courses) => {
        this.purchasedCourses = courses;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching purchased courses:', err);
        this.isLoading = false;
      },
    });
  }

  // View details of a selected course
  viewCourseDetails(courseId: string): void {
    this.courseService.getCourseById(courseId).subscribe({
      next: (course) => {
        this.selectedCourse = course;
      },
      error: (err) => {
        console.error('Error fetching course details:', err);
      },
    });
  }

  // Show All Courses when the link is clicked
  viewAllCourses(): void {
    this.showAllCourses = true;
    this.showMyCourses = false;
    this.isLoading = true;
    this.fetchAllCourses(); // Fetch all courses
  }

  // Show Purchased Courses when the link is clicked
  viewPurchasedCourses(): void {
    this.showAllCourses = false;
    this.showMyCourses = true;
    this.isLoading = true;
    this.fetchPurchasedCourses(); // Fetch purchased courses
  }

  logout(): void {
    // Logic for logging out (e.g., clearing local storage or tokens)
    console.log('User logged out');
    // Redirect to login page or home page
    this.router.navigate(['/login']);
  }
}
