package com.orest.app.template_spring_app.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Builder(toBuilder = true)
@AllArgsConstructor
@Entity
public class RoleEntity {
    @Id
    private Long id;
    private String roleName;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity owner;


}
