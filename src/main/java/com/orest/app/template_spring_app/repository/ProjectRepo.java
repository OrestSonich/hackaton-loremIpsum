package com.orest.app.template_spring_app.repository;

import com.orest.app.template_spring_app.entity.ProjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProjectRepo extends JpaRepository<ProjectEntity, Long> {

    Optional<ProjectEntity> findByProjectName(String projectName);
    boolean existsProjectEntityByProjectName (String projectName);
}
