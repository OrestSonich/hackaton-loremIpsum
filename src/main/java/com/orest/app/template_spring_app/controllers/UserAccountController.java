package com.orest.app.template_spring_app.controllers;

import com.orest.app.template_spring_app.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/")
@RequiredArgsConstructor

public class UserAccountController {

    private UserService service;

    @CrossOrigin
    @GetMapping("/user/")
    public ResponseEntity getUserById(@RequestParam String username){
        return ResponseEntity.ok(service.getOneByEmail(username));
    }
}
