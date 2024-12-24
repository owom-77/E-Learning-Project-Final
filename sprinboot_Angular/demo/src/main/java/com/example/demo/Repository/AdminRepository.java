package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String> {
    // Find Admin by email (optional, for additional functionality)
}
