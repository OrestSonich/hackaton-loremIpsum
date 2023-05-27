package com.orest.app.template_spring_app.controllers;

import com.orest.app.template_spring_app.services.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/projects/")
@RequiredArgsConstructor
@CrossOrigin
public class ProjectController {

    @Autowired
    private ProjectService service;

    @GetMapping ("/{companyName}")
    public ResponseEntity getAllProjects(@PathVariable String companyName){
        return ResponseEntity.ok(service.getAllProjectsByName(companyName));
    }
}
