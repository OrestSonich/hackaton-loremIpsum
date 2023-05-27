package com.orest.app.template_spring_app.controllers;


import com.orest.app.template_spring_app.entity.RangEntity;
import com.orest.app.template_spring_app.services.RangService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/ranks/")
@RequiredArgsConstructor
@CrossOrigin
public class RangController {

    @Autowired
    private RangService service;

    @PostMapping
    public ResponseEntity addRank(@RequestBody RangEntity rang,
                                  @RequestParam Long user_id){
        return ResponseEntity.ok(service.addRang(rang, user_id));
    }

}
