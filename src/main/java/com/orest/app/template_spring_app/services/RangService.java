package com.orest.app.template_spring_app.services;

import com.orest.app.template_spring_app.entity.RangEntity;
import com.orest.app.template_spring_app.entity.UserEntity;
import com.orest.app.template_spring_app.model.RangModel;
import com.orest.app.template_spring_app.repository.RangRepo;
import com.orest.app.template_spring_app.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
public class RangService {

    @Autowired
    private RangRepo rangRepo;
    @Autowired
    private UserRepo userRepo;

    public RangModel addRang(RangEntity rangs, Long id) {
        rangs.setCreatedAt(Date.valueOf(LocalDate.now(ZoneId.of("GMT+0300"))));
        UserEntity user = userRepo.findById(id).
                orElseThrow();
        rangs.setOwner(user);
        return RangModel.toModel(rangRepo.save(rangs));
    }

    public void deleteRang(Long id) {
        rangRepo.deleteById(id);
    }

    public RangModel updateRang(RangEntity rangs, Long id) {
        RangEntity findEntity = rangRepo.findById(id)
                .orElseThrow();
        if (rangs.getRang() != null)
            findEntity.setRang(rangs.getRang());

        findEntity.setUpdatedAt(Date.valueOf(LocalDate.now(ZoneId.of("GMT+0300"))));
        rangRepo.save(findEntity);
        return RangModel.toModel(findEntity);
    }
}
