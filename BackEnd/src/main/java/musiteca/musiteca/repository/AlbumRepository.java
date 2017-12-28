package musiteca.musiteca.repository;


import musiteca.musiteca.model.Album;
import musiteca.musiteca.model.Artista;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlbumRepository extends JpaRepository<Album, String>{

    @Query(value="Select a from Album a where a.usuario=:pnome")
    List<Album> getAlbunsUsuario(@Param("pnome") String usuario);

    @Query(value="Select a from Album a where a.usuario=:pnome AND a.artistaNome=:partist")
    List<Album> getAlbunsArtista(@Param("pnome") String usuario, @Param("partist") String artista);

    @Query(value="Select a from Album a where a.usuario=:pnome AND a.artistaNome=:partist AND a.nome=:palbum")
    Album getAlbumUsuario(@Param("pnome") String usuario, @Param("partist") String artista, @Param("palbum") String album);
}
