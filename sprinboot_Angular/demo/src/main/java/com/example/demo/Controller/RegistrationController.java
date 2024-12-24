package com.example.demo.Controller;

import java.util.HashMap;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Registration;
import com.example.demo.Services.RegistrationServices;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class RegistrationController {

    @Autowired
    private RegistrationServices studentService;

    // @PostMapping("/register")
    // public ResponseEntity<String> registerStudent(@RequestBody Registration student) {
    //     try {
    //         studentService.registerStudent(student);
    //         return ResponseEntity.ok("Student registered successfully!");
    //     } catch (RuntimeException e) {
    //         return ResponseEntity.badRequest().body(e.getMessage());
    //     }
    // }

    @PostMapping("/register")
public ResponseEntity<Map<String, String>> registerStudent(@RequestBody Registration student) {
    try {
        studentService.registerStudent(student);

        // Return a JSON response
        Map<String, String> response = new HashMap<>();
        response.put("message", "Student registered successfully!");
        return ResponseEntity.ok(response);

    } catch (RuntimeException e) {
        // Return error message in JSON format
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", e.getMessage());
        return ResponseEntity.badRequest().body(errorResponse);
    }
}


    // @PostMapping("/login")
    // public ResponseEntity<String> loginStudent(@RequestBody Registration student) {
    //     boolean isAuthenticated = studentService.loginStudent(student.getEmail(), student.getPassword());
    //     if (isAuthenticated) {
    //         return ResponseEntity.ok("Login successful!");
    //     } else {
    //         return ResponseEntity.status(401).body("Invalid email or password!");
    //     }
    // }

    @PostMapping("/login")
public ResponseEntity<Map<String, String>> loginStudent(@RequestBody Registration student) {
    boolean isAuthenticated = studentService.loginStudent(student.getEmail(), student.getPassword());

    if (isAuthenticated) {
        // Return a success response in JSON format
        Map<String, String> response = new HashMap<>();
        response.put("message", "Login successful!");
        return ResponseEntity.ok(response);
    } else {
        // Return an error response in JSON format
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", "Invalid email or password!");
        return ResponseEntity.status(401).body(errorResponse);
    }
}

}