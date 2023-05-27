package com.orest.app.template_spring_app.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class ProjectEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int hours;
    private String projectName;
    private String category;
    private String address;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity owner;
    private Date createdAt;
    private Date updatedAt;

}
