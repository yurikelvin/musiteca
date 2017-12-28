package musiteca.musiteca.repository;

import musiteca.musiteca.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, String>{

//    @Query(value="Select u from Usuario u where u.nome=:pnome")
//    Usuario buscarPorNome(@Param("pnome") String nome);
}
