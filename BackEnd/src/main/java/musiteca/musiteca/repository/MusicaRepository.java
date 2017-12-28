package musiteca.musiteca.repository;

import musiteca.musiteca.model.Artista;
import musiteca.musiteca.model.Musica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MusicaRepository extends JpaRepository<Musica, String>{

    @Query(value="Select a from Musica a where a.usuario=:pnome")
    List<Musica> getMusicasUsuario(@Param("pnome") String usuario);

    @Query(value="Select a from Musica a where a.usuario=:pnome AND a.nomeArtist=:partist")
    List<Musica> getMusicasArtista(@Param("pnome") String usuario, @Param("partist") String artista);

    @Query(value="Select a from Musica a where a.usuario=:pnome AND a.nomeArtist=:partist AND a.albumNome=:palbum")
    List<Musica> getMusicasAlbum(@Param("pnome") String usuario, @Param("partist") String artista, @Param("palbum") String album);

    @Query(value="Select a from Musica a where a.usuario=:pnome AND a.nomeArtist=:partist AND a.albumNome=:palbum AND a.nome=:pmusic")
    Musica getMusicaAlbum(@Param("pnome") String usuario, @Param("partist") String artista, @Param("palbum") String album, @Param("pmusic") String musica);

}
