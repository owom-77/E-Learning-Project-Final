// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import emailjs from 'emailjs-com';  
// // import { FormControl, FormGroup } from '@angular/forms';
// import { RouterLink } from '@angular/router';
// import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
// // import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


// @Component({
//   selector: 'app-email',
//   imports: [CommonModule,ReactiveFormsModule],
//   templateUrl: './email.component.html',
//   styleUrl: './email.component.scss'
// })
// export class EmailComponent implements OnInit{

//   contact = new FormGroup({
//     subject: new FormControl(),
//     message: new FormControl(),  
//   });

//   responseMessage: string | null = null;

//   constructor() {}

//   ngOnInit(): void {}

//   onSubmit(): void {
//     if (this.contact.valid) {
//       const formData = this.contact.value;
  
      
//       const templateParams = {
//         to_name: 'Admin',    
//         fullName: 'User',      
//         email: formData.subject, 
//         message: formData.message  
//       };
  
    
//       emailjs.init('JeoTGE4JVCsfF3zvH'); 
  
     
//       emailjs
//         .send(
//           'service_e0v26oq',  
//           'template_fzq7r8s',  
//           templateParams,
//           'JeoTGE4JVCsfF3zvH' 
//         )
//         .then(
//           (response) => {
//             console.log('Email sent successfully:', response);
//             this.responseMessage = 'Your query has been sent successfully!';
//             this.contact.reset(); 
//           },
//           (error) => {
//             console.error('Error sending email:', error);
//             this.responseMessage = 'Failed to send your query';
//           }
//         );
//     } else {
//       this.responseMessage = 'Please fill out all fields.';
//     }
// }
// }
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'], // Fixed typo here
})
export class EmailComponent implements OnInit {
  contact: FormGroup;
  responseMessage: string | null = null;

  constructor() {
    this.contact = new FormGroup({
      fullName: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    emailjs.init('JeoTGE4JVCsfF3zvH'); // Initialize EmailJS here
  }

  onSubmit(): void {
    if (this.contact.valid) {
      const formData = this.contact.value;

      const templateParams = {
        to_name: 'Admin',
        fullName: formData.fullName, // Use the value from the form
        email: formData.subject,
        message: formData.message,
      };

      emailjs
        .send(
          'service_e0v26oq', // Replace with your service ID
          'template_fzq7r8s', // Replace with your template ID
          templateParams,
          'JeoTGE4JVCsfF3zvH' // Replace with your public key
        )
        .then(
          (response) => {
            console.log('Email sent successfully:', response);
            this.responseMessage = 'Your query has been sent successfully!';
            this.contact.reset();
          },
          (error) => {
            console.error('Error sending email:', error);
            this.responseMessage = 'Failed to send your query. Please try again later.';
          }
        );
    } else {
      this.responseMessage = 'Please fill out all fields.';
    }
  }
}
