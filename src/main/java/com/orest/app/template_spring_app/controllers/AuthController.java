package com.orest.app.template_spring_app.controllers;


import com.orest.app.template_spring_app.security.auth.AuthService;
import com.orest.app.template_spring_app.security.auth.AuthenticationResponse;
import com.orest.app.template_spring_app.security.auth.AuthRequest;
import com.orest.app.template_spring_app.security.auth.RegisterRequest;
import com.orest.app.template_spring_app.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {
    private final AuthService service;
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
