package com.orest.app.template_spring_app.model;

import com.orest.app.template_spring_app.entity.UserEntity;
import lombok.Data;

@Data
public class UserModel {

    public static UserModel toModel(UserEntity entity){
        return null;
    }
}
