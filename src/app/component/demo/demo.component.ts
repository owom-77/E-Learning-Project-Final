import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  imports : [CommonModule],
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  // Define some sample courses for the featured section
  featuredCourses = [
    { name: 'Web Development Mastery', description: 'Learn HTML, CSS, and JavaScript from scratch.', price: 49.99 },
    { name: 'React.js for Beginners', description: 'Build dynamic, responsive web apps with React.', price: 29.99 },
    { name: 'Data Science with Python', description: 'Dive into Python and explore data science fundamentals.', price: 39.99 }
  ];

  // Sample user testimonial for display
  testimonials = [
    { text: 'I loved the Python Programming course! The content was clear and easy to understand.' },
    { text: 'The interactive quizzes and real-world projects in the Web Development Mastery course made learning so much fun.' }
  ];

  // Sample UI features description
  features = [
    'Track your learning progress easily with our dashboard.',
    'Get certified upon completing courses.',
    'Interact with instructors for personalized guidance.'
  ];

  // Sample call to action
  callToAction = "Start learning today!";
}
