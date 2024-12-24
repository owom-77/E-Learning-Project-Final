package com.example.demo.Services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Registration;
import com.example.demo.Repository.RegistrationRepository;

@Service
public class RegistrationServices {

    @Autowired
    private RegistrationRepository studentRepository;

    public Registration registerStudent(Registration student) {
        // Check if email already exists
        Registration existingStudent = studentRepository.findByEmail(student.getEmail());
        if (existingStudent != null) {
            throw new RuntimeException("Email already registered!");
        }
        return studentRepository.save(student);
    }

    public boolean loginStudent(String email, String password) {
        Registration student = studentRepository.findByEmail(email);
        return student != null && student.getPassword().equals(password);
    }
}

