package com.orest.app.template_spring_app.controllers;

import com.orest.app.template_spring_app.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin
public class UserAccountController {

    private UserService service;
    @GetMapping
    public ResponseEntity getUserById(@RequestParam Long user_id){
        return ResponseEntity.ok(service.getOneById(user_id));
    }
}
