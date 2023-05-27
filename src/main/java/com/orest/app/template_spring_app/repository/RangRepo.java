package com.orest.app.template_spring_app.repository;

import com.orest.app.template_spring_app.entity.ProjectEntity;
import com.orest.app.template_spring_app.entity.RangEntity;
import lombok.Data;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RangRepo extends JpaRepository<RangEntity, Long> {
    Optional<RangEntity> findByRang(String rang);
    boolean existsRangEntityByRang (String rang);
}
