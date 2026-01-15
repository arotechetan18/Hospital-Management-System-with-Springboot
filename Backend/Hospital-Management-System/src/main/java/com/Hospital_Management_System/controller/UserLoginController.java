package com.Hospital_Management_System.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication; // HA CORRECT IMPORT AHE
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.Hospital_Management_System.entity.LoginRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200") 
public class UserLoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            // Authentication check
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    loginRequest.getUsername(), 
                    loginRequest.getPassword()
                )
            );

            // Security Context 
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Role fetch
            String role = authentication.getAuthorities().iterator().next().getAuthority(); // ROLE_ADMIN / ROLE_DOCTOR
            role = role.replace("ROLE_", "");

            // Response 
            Map<String, String> response = new HashMap<>();
            response.put("message", "Login Successful");
            response.put("username", loginRequest.getUsername());
            response.put("userType", role); 

            System.out.println("User authenticated: " + loginRequest.getUsername() + " with role: " + role);
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            System.out.println("Authentication Failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

}