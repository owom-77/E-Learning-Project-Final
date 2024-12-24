// package com.example.demo.Services;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.mail.SimpleMailMessage;
// import org.springframework.mail.javamail.JavaMailSender;
// import org.springframework.stereotype.Service;

// // import com.example.demo.Entity.ContactOfQuery;
// // import com.example.demo.Repository.ContactUsQueryRepository;

// @Service
// public class ContactOfQueryService {

//     // @Autowired
//     // private  ContactUsQueryRepository repository;

//     @Autowired
//     private JavaMailSender mailSender;

//     // public ContactOfQuery saveQuery(ContactOfQuery query) {
//     //     // Save the query to the database
//     //     ContactOfQuery savedQuery = repository.save(query);

//     //     // Send email to admin
//     //     sendEmailToAdmin(savedQuery);

//     //     return savedQuery;
//     // }

//     private void sendEmailToAdmin(String fullname, String toEmail, String massage) {
//         SimpleMailMessage message = new SimpleMailMessage();
//         message.setFrom("ingalepratiksha845@gmail.com");
//         message.setText(fullname);
//         message.setTo(toEmail); // Replace with admin email
//         message.setSubject(massage);
//         // message.setText("Name: " + query.getFullName() +
//         //                 "\nEmail: " + query.getEmail() +
//         //                 "\nMessage: " + query.getMessage());

//         mailSender.send(message);
//         System.out.println("Mail Sent Successfully");
//     }
// }