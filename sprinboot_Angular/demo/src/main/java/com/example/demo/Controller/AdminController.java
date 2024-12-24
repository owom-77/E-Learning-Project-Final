package com.example.demo.Controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Admin;
import com.example.demo.Services.AdminService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, Object> loginRequest) {
        // Parse input from JSON body
        String adminId = (String) loginRequest.get("adminId");
        String email = (String) loginRequest.get("email");
        String password = (String) loginRequest.get("password");

        Optional<Admin> admin = adminService.authenticateAdmin(adminId, email, password);

        Map<String, Object> response = new HashMap<>();

        if (admin.isPresent()) {
            response.put("message", "Admin logged in successfully");
            response.put("success", true);
            response.put("adminId", admin.get().getAdminId());
            return ResponseEntity.ok(response);
        }

        response.put("message", "Invalid AdminID, Email, or Password.");
        response.put("success", false);
        response.put("adminId", null);
        return ResponseEntity.status(401).body(response); // Unauthorized
    }
}