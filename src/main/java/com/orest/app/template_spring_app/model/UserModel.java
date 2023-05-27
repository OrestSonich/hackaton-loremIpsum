package com.orest.app.template_spring_app.model;

import com.orest.app.template_spring_app.entity.UserEntity;
import lombok.Data;

import java.util.Date;

@Data
public class UserModel {

    private String firstName;
    private String lastName;
    private int age;
    private Date createdAt;
    private Date updatedAt;

    public static UserModel toModel(UserEntity entity){
        UserModel model = new UserModel();
        model.setFirstName(entity.getFirstName());
        model.setLastName(entity.getLastName());
        model.setAge(entity.getAge());
        model.setCreatedAt(entity.getCreatedAt());
        model.setUpdatedAt(entity.getUpdatedAt());
        return model;
    }
}
