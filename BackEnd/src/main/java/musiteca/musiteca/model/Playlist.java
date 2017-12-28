package musiteca.musiteca.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@IdClass(PlaylistId.class)
public class Playlist {

    @Id
    @Column
    private String usuario;
    @Id
    @Column
    private String nome;
    @Column
    private String imagem;
    @Column
    private String descricao;
    @Column
    private String data;
    @ManyToMany(cascade = CascadeType.ALL)
    private Set<Musica> musicas;

    public Playlist() {
        this.musicas = new HashSet<Musica>();
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public Set<Musica> getMusicas() {
        return musicas;
    }

    public void setMusicas(Set<Musica> musicas) {
        this.musicas = musicas;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
}

class PlaylistId implements Serializable {
    String usuario;
    String nome;

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PlaylistId that = (PlaylistId) o;
        return Objects.equals(usuario, that.usuario) &&
                Objects.equals(nome, that.nome);
    }

    @Override
    public int hashCode() {

        return Objects.hash(usuario, nome);
    }
}
