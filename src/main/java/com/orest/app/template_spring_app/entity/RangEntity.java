package com.orest.app.template_spring_app.entity;

import com.orest.app.template_spring_app.enums.RangEnum;
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
public class RangEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(value = EnumType.STRING)
    private RangEnum rang = RangEnum.BEGINNER_VOLUNTEER;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity owner;
    private Date createdAt;
    private Date updatedAt;
}
