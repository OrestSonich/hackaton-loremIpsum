package com.orest.app.template_spring_app.controllers;

import com.orest.app.template_spring_app.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
@CrossOrigin
public class UserAccountController {
    @Autowired
    private UserService service;

    @CrossOrigin
    @GetMapping("/{email}")
    public ResponseEntity getUserById(@PathVariable String email){
        return ResponseEntity.ok(service.getOneByEmail(email));
    }
}
