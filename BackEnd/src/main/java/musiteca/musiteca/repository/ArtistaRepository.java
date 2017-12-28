package musiteca.musiteca.repository;

import musiteca.musiteca.model.Artista;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface ArtistaRepository extends JpaRepository<Artista, String>{

    @Query(value="Select a from Artista a where a.usuario=:pnome")
    List<Artista> getArtistasUsuario(@Param("pnome") String usuario);

    @Query(value="Select a from Artista a where a.usuario=:pnome AND a.nome=:partist")
    Artista getArtistaUsuario(@Param("pnome") String usuario, @Param("partist") String artista);

    @Query(value="Select a from Artista a where a.favorito is true AND a.usuario=:pnome")
    List<Artista> getArtistasFavoritos(@Param("pnome") String usuario);
}
