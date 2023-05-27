package com.orest.app.template_spring_app.entity;

import com.orest.app.template_spring_app.enums.RolesEnum;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@Builder(toBuilder = true)
@AllArgsConstructor
@Entity

public class UserEntity implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private int age;
    private Date createdAt;
    private Date updatedAt;

    @Enumerated(value = EnumType.STRING)
    private RolesEnum role;

    private String email;
    private String password;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "owner")
    private List<RoleEntity> roles;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return null;
    }

    @Override
    public String getUsername() {
        return null;                // todo configure
    }

    @ToString.Include(name = "password")
    private String maskPassword(){
        return "*********";
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
