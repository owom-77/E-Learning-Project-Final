package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Registration;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {

    Registration findByEmail(String email);
    
}
