package com.orest.app.template_spring_app.services;

import com.orest.app.template_spring_app.entity.UserEntity;
import com.orest.app.template_spring_app.model.UserModel;
import com.orest.app.template_spring_app.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepo repository;

    public UserModel getOneById(Long user_id){
        UserEntity user = repository.findById(user_id)
                .orElseThrow();
        return UserModel.toModel(user);
    }
    public UserModel getOneByEmail(String email){
        UserEntity user = repository.findByEmail(email).orElseThrow();
        return UserModel.toModel(user);
    }
}
