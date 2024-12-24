package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "student_registration")
@Getter
@Setter
public class Registration {
   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    private String motherName;
    private String fatherName;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String gender;

    private String state;
    private String city;

    @Column(nullable = false)
    private String dob; // Format: dd-mm-yyyy

    private String pincode;

    @Column(nullable = false)
    private String course;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;   
}
