package musiteca.musiteca.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import musiteca.musiteca.model.enums.Role;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;


@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Usuario {


    @Column
    private String nome;
    @Column
    private String senha;
    @Id
    @Column
    private String email;
    @Column
    @Enumerated
    private Role role;

    public Usuario() {
        this.role = Role.USER;
    }

    public Usuario(String nome, String senha, String email) {
        this();
        this.nome = nome;
        this.senha = senha;
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(String role) {
        Role permission = null;
        switch(role) {
            case "USER":
                permission = Role.USER;
                break;
            case "ADMIN":
                permission = Role.ADMIN;
        }
        this.role = permission;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Usuario usuario = (Usuario) o;
        return Objects.equals(email, usuario.email);
    }

    @Override
    public int hashCode() {

        return Objects.hash(email);
    }

    public String getEmail() {
        return email;
    }

}
