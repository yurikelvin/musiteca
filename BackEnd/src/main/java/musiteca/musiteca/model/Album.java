package musiteca.musiteca.model;


import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@IdClass(AlbumId.class)
public class Album {

    @Id
    @Column
    private String usuario;
    @Id
    @Column
    private String nome;
    @Column
    private String imagem;
    @Column
    private String ano;
    @Id
    @Column
    private String artistaNome;


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

    public String getAno() {
        return ano;
    }

    public void setAno(String ano) {
        this.ano = ano;
    }

    public String getArtistaNome() {
        return artistaNome;
    }

    public void setArtistaNome(String artistaNome) {
        this.artistaNome = artistaNome;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
}


class AlbumId implements Serializable{
    String usuario;
    String artistaNome;
    String nome;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AlbumId albumId = (AlbumId) o;
        return Objects.equals(usuario, albumId.usuario) &&
                Objects.equals(artistaNome, albumId.artistaNome) &&
                Objects.equals(nome, albumId.nome);
    }

    @Override
    public int hashCode() {

        return Objects.hash(usuario, artistaNome, nome);
    }
}