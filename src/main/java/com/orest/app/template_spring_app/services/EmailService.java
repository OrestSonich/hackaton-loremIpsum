package com.orest.app.template_spring_app.services;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendMessage(String to, String subject, String text){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("sonich.edu@gmail.com"); //todo send from?
        message.setSubject(subject);
        message.setTo(to);
        message.setText(text);
        this.mailSender.send(message);
    }
}
