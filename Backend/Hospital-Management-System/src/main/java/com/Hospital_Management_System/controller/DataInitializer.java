package com.Hospital_Management_System.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.Hospital_Management_System.entity.User;
import com.Hospital_Management_System.repository.UserRepository;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public void run(String... args) throws Exception {
        // Admin check
        if (userRepository.findByUsername("admin").isEmpty()) {
            User admin = new User();
            admin.setUsername("admin");
            admin.setPassword(passwordEncoder.encode("admin123"));
            admin.setType("ADMIN"); 
            userRepository.save(admin);
            System.out.println("✅ Default Admin User Created Successfully!");
        }

        // Doctor check
        if (userRepository.findByUsername("doctor").isEmpty()) {
            User doctor = new User();
            doctor.setUsername("doctor");
            doctor.setPassword(passwordEncoder.encode("doctor123")); 
            doctor.setType("DOCTOR"); 
            userRepository.save(doctor);
            System.out.println("✅ Default Doctor User Created Successfully!");
        }
    }

}