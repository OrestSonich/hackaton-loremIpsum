package com.orest.app.template_spring_app.pojo;

import com.orest.app.template_spring_app.entity.ProjectEntity;
import lombok.Data;

@Data
public class ProjectModel {
    private Long id;
    private int hours;
    private String project;
    private String user;

    public static ProjectModel toModel(ProjectEntity entity){
        ProjectModel model = new ProjectModel();
        model.setId(entity.getId());
        model.setHours(entity.getHours());
        model.setProject(entity.getProject());
        model.setUser(entity.getUser());
        return model;
    }
}
