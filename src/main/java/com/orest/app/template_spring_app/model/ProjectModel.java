package com.orest.app.template_spring_app.model;

import com.orest.app.template_spring_app.entity.ProjectEntity;
import lombok.Data;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Data
public class ProjectModel {
    private Long id;
    private int hours;
    private String project;
    private Date createdAt;
    private Date updatedAt;
    private String category;
    private String address;
    private String userEmail;

    public static ProjectModel toModel(ProjectEntity entity){
        ProjectModel model = new ProjectModel();
        model.setId(entity.getId());
        model.setHours(entity.getHours());
        model.setProject(entity.getProjectName());
        model.setCreatedAt(entity.getCreatedAt());
        model.setUpdatedAt(entity.getUpdatedAt());
        model.setCategory(entity.getCategory());
        model.setAddress(entity.getAddress());
        model.setUserEmail(entity.getOwner().getEmail());
        return model;
    }

    public static List<ProjectModel> toModel(List<ProjectEntity> entityList){
        List<ProjectModel> modelList = new ArrayList<>();
        for (ProjectEntity el : entityList){
            modelList.add(ProjectModel.toModel(el));
        }
        return modelList;
    }
}
