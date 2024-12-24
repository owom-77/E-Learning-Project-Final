package com.example.demo.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Admin;
import com.example.demo.Repository.AdminRepository;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public Optional<Admin> authenticateAdmin(String adminId, String email, String password) {
        Optional<Admin> admin = adminRepository.findById(adminId); // Find by AdminID
        
        if (admin.isPresent() && 
            admin.get().getEmail().equals(email) && 
            admin.get().getPassword().equals(password)) {
            return admin;
        }
        return Optional.empty();
    }
}