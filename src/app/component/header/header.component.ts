import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { HomeComponent } from '../home/home.component';
import { CourseComponent } from '../course/course.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DemoComponent } from '../demo/demo.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet,RouterLink,LoginComponent,SignUpComponent,HomeComponent,CourseComponent,DemoComponent,AboutUsComponent,ContactUsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
