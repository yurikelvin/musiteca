package musiteca.musiteca.repository;

import musiteca.musiteca.model.Artista;
import musiteca.musiteca.model.Playlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface PlaylistRepository extends JpaRepository<Playlist, String>{

    @Query(value="Select a from Playlist a where a.usuario=:pnome")
    Collection<Playlist> getPlaylistsUsuario(@Param("pnome") String usuario);

    @Query(value="Select a from Playlist a where a.usuario=:pnome AND a.nome=:playlist")
    Playlist getPlaylistUsuario(@Param("pnome") String usuario, @Param("playlist") String playlist);
}
