package com.orest.app.template_spring_app.services;

import com.orest.app.template_spring_app.entity.UserEntity;
import com.orest.app.template_spring_app.repository.ProjectRepo;
import com.orest.app.template_spring_app.entity.ProjectEntity;
import com.orest.app.template_spring_app.repository.UserRepo;
import io.jsonwebtoken.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import com.orest.app.template_spring_app.model.ProjectModel;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepo projectRepo;

    @Autowired
    private UserRepo userRepo;

    public ProjectModel addProject(ProjectEntity projects, Long id) {
        projects.setCreatedAt(Date.valueOf(LocalDate.now(ZoneId.of("GMT+0300"))));
        UserEntity user = userRepo.findById(id).orElseThrow();
        projects.setOwner(user);
        return ProjectModel.toModel(projectRepo.save(projects));
    }

    public void deleteProjects(Long id) {
        projectRepo.deleteById(id);
    }

    public ProjectModel updateProject(ProjectEntity project, Long id) {
        ProjectEntity findEntity = projectRepo.findById(id)
                .orElseThrow(() ->new IOException("project not found"));
        if (project.getHours() != 0)
            findEntity.setHours(project.getHours());
        if (project.getProjectName() != null)
            findEntity.setProjectName(project.getProjectName());
        findEntity.setAddress(project.getAddress());
        findEntity.setCategory(project.getCategory());


        findEntity.setUpdatedAt(Date.valueOf(LocalDate.now(ZoneId.of("GMT+0300"))));
        projectRepo.save(findEntity);
        return ProjectModel.toModel(findEntity);
    }

    public List<ProjectModel> getAllProjectsByName(String companyName) {
        List<ProjectEntity> findEntity = projectRepo.findAllByProjectName(companyName);
        return ProjectModel.toModel(findEntity);
    }

    public List<ProjectModel> getAllProject() {
        List<ProjectEntity> findEntity = projectRepo.findAll();
        return ProjectModel.toModel(findEntity);
    }

    public List<ProjectModel> getAllByCategory(String category) {
        List<ProjectEntity> findEntity = projectRepo.findAllByCategory(category);
        return ProjectModel.toModel(findEntity);
    }
}
