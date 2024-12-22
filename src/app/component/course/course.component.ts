import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Course {
  name: string;
  description: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.http.get<any>('https://dummyapi.online/api/products').subscribe({
      next: (res) => {
        console.log('API Response:', res);

        if (res && res.products) {
          this.courses = res.products; 
        } else if (res && Array.isArray(res)) {
          this.courses = res;
        } else {
          this.courses = [];
          console.warn('Expected "products" key is missing, and response is not an array');
        }
      },
      error: (err) => {
        console.error('Error fetching courses:', err);
        this.errorMessage = 'Failed to load courses. Please try again later.';
        this.courses = [];
      },
    });
  }
}
