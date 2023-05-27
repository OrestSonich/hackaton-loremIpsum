package com.orest.app.template_spring_app.controllers;

import com.orest.app.template_spring_app.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/")
@RequiredArgsConstructor
@CrossOrigin
public class UserAccountController {

    @Autowired
    private UserService service;

    @GetMapping("/user")
    public ResponseEntity getUserById(@RequestParam Long user_id){
        return ResponseEntity.ok(service.getOneById(user_id));
    }
}
