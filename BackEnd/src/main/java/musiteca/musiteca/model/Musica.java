package musiteca.musiteca.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@IdClass(MusicaId.class)
public class Musica {

    @Id
    @Column
    private String usuario;
    @Id
    @Column
    private String albumNome;
    @Column
    private String nomeArtist;
    @Id
    @Column
    private String nome;
    @Column
    private String duracao;
    @Column
    private String ano;

    public String getAlbumNome() {
        return albumNome;
    }

    public void setAlbumNome(String albumNome) {
        this.albumNome = albumNome;
    }

    public String getNomeArtist() {
        return nomeArtist;
    }

    public void setNomeArtist(String nomeArtist) {
        this.nomeArtist = nomeArtist;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDuracao() {
        return duracao;
    }

    public void setDuracao(String duracao) {
        this.duracao = duracao;
    }

    public String getAno() {
        return ano;
    }

    public void setAno(String ano) {
        this.ano = ano;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Musica musica = (Musica) o;
        return Objects.equals(usuario, musica.usuario) &&
                Objects.equals(albumNome, musica.albumNome) &&
                Objects.equals(nomeArtist, musica.nomeArtist) &&
                Objects.equals(nome, musica.nome);
    }

    @Override
    public int hashCode() {

        return Objects.hash(usuario, albumNome, nomeArtist, nome);
    }
}

class MusicaId implements Serializable {
    String usuario;
    String albumNome;
    String nome;

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getAlbumNome() {
        return albumNome;
    }

    public void setAlbumNome(String albumNome) {
        this.albumNome = albumNome;
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
        MusicaId musicaId = (MusicaId) o;
        return Objects.equals(usuario, musicaId.usuario) &&
                Objects.equals(albumNome, musicaId.albumNome) &&
                Objects.equals(nome, musicaId.nome);
    }

    @Override
    public int hashCode() {

        return Objects.hash(usuario, albumNome, nome);
    }
}