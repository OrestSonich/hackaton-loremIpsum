package com.orest.app.template_spring_app.model;

import com.orest.app.template_spring_app.entity.ProjectEntity;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

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
        model.setProject(entity.getProjectName());
        model.setUser(entity.getUser());
        return model;
    }

    public static List<ProjectModel> toModel(List<ProjectEntity> entityList){
        List<ProjectModel> modelList = new ArrayList<>();
        return null;
    }
}
