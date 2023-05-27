package com.orest.app.template_spring_app.model;

import com.orest.app.template_spring_app.entity.RangEntity;
import lombok.Data;

@Data
public class RangModel {
    private Long id;
    private String rang;
    private String user;

    public static RangModel toModel(RangEntity entity){
        RangModel model = new RangModel();
        model.setId(entity.getId());
        model.setRang(entity.getRang());
//        model.setUser(entity.getUser());
        return model;
    }
}
