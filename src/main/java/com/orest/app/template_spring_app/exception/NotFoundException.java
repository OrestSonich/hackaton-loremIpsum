package com.orest.app.template_spring_app.exception;

import org.springframework.security.core.AuthenticationException;

public class NotFoundException extends AuthenticationException {
    public NotFoundException(String msg) {
        super(msg);
        System.err.println(msg);
    }
}
