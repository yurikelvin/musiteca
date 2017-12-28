package musiteca.musiteca.service;

import musiteca.musiteca.model.Artista;
import musiteca.musiteca.repository.ArtistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class ArtistaService implements CrudService<Artista>{

    @Autowired
    private ArtistaRepository artistaRepository;

    @Override
    public Artista create(Artista artista) {
        return artistaRepository.save(artista);
    }

    @Override
    public Artista update(Artista artista) {
        return artistaRepository.save(artista);
    }

    @Override
    public Collection<Artista> getAll() {
        return artistaRepository.findAll();
    }


    @Override
    public void removeAll() {
        artistaRepository.deleteAll();
    }

    public Collection<Artista> getArtistasUsuario(String usuario) {
        return artistaRepository.getArtistasUsuario(usuario);
    }

    public Collection<Artista> getArtistasFavoritos(String usuario) {
        return artistaRepository.getArtistasFavoritos(usuario);
    }

    public boolean contemArtista(String usuario, String artista) {
        return artistaRepository.getArtistaUsuario(usuario,artista) != null;
    }

    public void removeFavorito(String usuario, String artista) {
        Artista artistaBuscado = artistaRepository.getArtistaUsuario(usuario, artista);
        artistaBuscado.setFavorito(false);
        artistaRepository.save(artistaBuscado);
    }

    public void adicionaFavorito(String usuario, String artista) {
        Artista artistaBuscado = artistaRepository.getArtistaUsuario(usuario, artista);
        artistaBuscado.setFavorito(true);
        artistaRepository.save(artistaBuscado);
    }

}
