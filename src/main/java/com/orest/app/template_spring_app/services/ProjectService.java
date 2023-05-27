package com.orest.app.template_spring_app.services;

import com.orest.app.template_spring_app.repository.ProjectRepo;
import com.orest.app.template_spring_app.entity.ProjectEntity;
import org.springframework.beans.factory.annotation.Autowired;
import com.orest.app.template_spring_app.pojo.ProjectModel;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.sql.Date;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepo projectRepo;

    public ProjectModel addCosts(ProjectEntity project, Long id) {
        project.setCreatedAt(Date.valueOf(LocalDate.now(ZoneId.of("GMT+0300"))));
        ProjectEntity user = projectRepo.findById(id).
                orElseThrow(() ->new ArrayIndexOutOfBoundsException("project not found"));
        project.setOwner(project.getOwner());
        return ProjectModel.toModel(projectRepo.save(project));
    }

    public void deleteProjects(Long id) {
        projectRepo.deleteById(id);
    }

    public ProjectModel updateCosts(ProjectEntity costs, Long id) {
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
