package com.orest.app.template_spring_app.model;

import com.orest.app.template_spring_app.entity.ProjectEntity;
import com.orest.app.template_spring_app.entity.RangEntity;
import com.orest.app.template_spring_app.entity.UserEntity;
import lombok.Data;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class UserModel {

    private String firstName;
    private String lastName;
    private int age;
    private Date createdAt;
    private Date updatedAt;
    private List<ProjectModel> projects;
    private List<RangModel> rangs;


    public static UserModel toModel(UserEntity entity){
        UserModel model = new UserModel();
        model.setFirstName(entity.getFirstName());
        model.setLastName(entity.getLastName());
        model.setAge(entity.getAge());
        model.setCreatedAt(entity.getCreatedAt());
        model.setUpdatedAt(entity.getUpdatedAt());
        model.setProjects(entity.getProjects().stream().map(ProjectModel::toModel).collect(Collectors.toList()));
        model.setRangs(entity.getRangs().stream().map(RangModel::toModel).collect(Collectors.toList()));
        return model;
    }
}
