import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CourseComponent } from './component/course/course.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { DemoComponent } from './component/demo/demo.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { UserDashbordComponent } from './component/user-dashbord/user-dashbord.component';
import { AdminDashbordComponent } from './component/admin-dashbord/admin-dashbord.component';
import { PostFormComponent } from './component/post-form/post-form.component';
import { EmailComponent } from './email/email.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'course', component: CourseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  {path: 'demo',component : DemoComponent},
  {path: 'about',component:AboutUsComponent},
  {path : 'contact',component : ContactUsComponent},
  {path : 'userdashborad', component : UserDashbordComponent},
  {path : 'admindashborad', component : AdminDashbordComponent},
  {path : 'postform', component : PostFormComponent},
  { path: 'course/:id', component: CourseComponent},
  { path:'email', component:EmailComponent}
];
