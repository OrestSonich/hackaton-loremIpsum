package com.orest.app.template_spring_app.controllers;

import com.orest.app.template_spring_app.entity.ProjectEntity;
import com.orest.app.template_spring_app.services.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity getAllProjectsByName(@PathVariable String companyName){
        return ResponseEntity.ok(service.getAllProjectsByName(companyName));
    }

    @GetMapping("/all")
    public ResponseEntity getAllProject(){
        return ResponseEntity.ok(service.getAllProject());
    }

    @GetMapping("/all/{category}")
    public ResponseEntity getByCategory(@PathVariable String category){
        return ResponseEntity.ok(service.getAllByCategory(category));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteProject(@PathVariable Long id){
        service.deleteProjects(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity updateProjectInfo(@RequestBody ProjectEntity project,
                                            @PathVariable Long id){
        return ResponseEntity.ok(service.updateProject(project, id));
    }
    @PostMapping("/create")
    public ResponseEntity createProject(@RequestBody ProjectEntity project,
                                        @RequestParam Long user_id){
        return ResponseEntity.ok(service.addProject(project, user_id));
    }

}
