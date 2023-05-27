package com.orest.app.template_spring_app.model;

import com.orest.app.template_spring_app.entity.RangEntity;
import com.orest.app.template_spring_app.enums.RangEnum;
import lombok.Data;

@Data
public class RangModel {
    private Long id;
    private RangEnum rang;
    public static RangModel toModel(RangEntity entity){
        RangModel model = new RangModel();
        model.setId(entity.getId());
        model.setRang(entity.getRang());
        return model;
    }
}
