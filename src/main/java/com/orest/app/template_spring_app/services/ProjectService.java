package com.orest.app.template_spring_app.services;

import com.orest.app.template_spring_app.repository.ProjectRepo;
import com.orest.app.template_spring_app.entity.ProjectEntity;
import org.springframework.beans.factory.annotation.Autowired;
import com.orest.app.template_spring_app.pojo.ProjectModel;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepo projectRepo;

    public ProjectModel addProject(ProjectEntity projects, Long id) {
        projects.setCreatedAt(Date.valueOf(LocalDate.now(ZoneId.of("GMT+0300"))));
        ProjectEntity project = projectRepo.findById(id).
                orElseThrow();
        projects.setOwner(projects.getOwner());
        return ProjectModel.toModel(projectRepo.save(projects));
    }

    public void deleteProjects(Long id) {
        projectRepo.deleteById(id);
    }

    public ProjectModel updateProject(ProjectEntity costs, Long id) {
        ProjectEntity findEntity = projectRepo.findById(id)
                .orElseThrow(() ->new ArrayIndexOutOfBoundsException("project not found"));
        if (costs.getHours() != 0)
            findEntity.setHours(costs.getHours());
        if (costs.getProject() != null)
            findEntity.setProject(costs.getProject());
        if (costs.getUser() != null)
            findEntity.setUser(costs.getUser());

        findEntity.setUpdatedAt(Date.valueOf(LocalDate.now(ZoneId.of("GMT+0300"))));
        projectRepo.save(findEntity);
        return ProjectModel.toModel(findEntity);
    }
}
