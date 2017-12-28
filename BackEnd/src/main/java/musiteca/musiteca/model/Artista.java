package musiteca.musiteca.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@IdClass(ArtistaId.class)
public class Artista {

    @Id
    @Column
    private String usuario;
    @Id
    @Column
    private String nome;
    @Column
    private String imagem;
    @Column
    private String ultimaOuvida;
    @Column
    private boolean favorito;
    @Column
    private Integer rate;

    public Artista() {
        this.ultimaOuvida = "Não definido ainda";
        this.imagem = "https://www.atomix.com.au/media/2015/06/atomix_user31.png";
        this.rate = 0;
    }

    public Artista(String imagem) {
        this();
        this.imagem = imagem;
    }

    public Artista(String imagem, String ultimaOuvida, Integer rate) {
        this(imagem);
        this.ultimaOuvida = ultimaOuvida;
        this.rate = rate;
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

    public String getUltimaOuvida() {
        return ultimaOuvida;
    }

    public void setUltimaOuvida(String ultimaOuvida) {
        this.ultimaOuvida = ultimaOuvida;
    }

    public boolean isFavorito() {
        return favorito;
    }

    public void setFavorito(boolean favorito) {
        this.favorito = favorito;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Artista artista = (Artista) o;
        return Objects.equals(nome, artista.nome);
    }

    @Override
    public int hashCode() {

        return Objects.hash(nome);
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public Integer getRate() {
        return rate;
    }

    public void setRate(Integer rate) {
        this.rate = rate;
    }
}


class ArtistaId implements Serializable{

    String usuario;
    String nome;

    public ArtistaId() {

    }

    public ArtistaId(String usuario, String nome) {
        this.usuario = usuario;
        this.nome = nome;
    }

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
        ArtistaId artistaId = (ArtistaId) o;
        return Objects.equals(usuario, artistaId.usuario) &&
                Objects.equals(nome, artistaId.nome);
    }

    @Override
    public int hashCode() {

        return Objects.hash(usuario, nome);
    }
}