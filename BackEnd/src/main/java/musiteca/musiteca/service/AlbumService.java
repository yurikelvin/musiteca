package musiteca.musiteca.service;

import musiteca.musiteca.model.Album;
import musiteca.musiteca.repository.AlbumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class AlbumService implements CrudService<Album>{

    @Autowired
    private AlbumRepository albumRepository;

    @Override
    public Album create(Album album) {
        return albumRepository.save(album);
    }

    @Override
    public Album update(Album album) {
        return albumRepository.save(album);
    }

    @Override
    public Collection<Album> getAll() {
        return albumRepository.findAll();
    }

    @Override
    public void removeAll() {
        albumRepository.deleteAll();
    }

    public Collection<Album> getAlbunsUsuario(String usuario) {
        return albumRepository.getAlbunsUsuario(usuario);
    }

    public Collection<Album> getAlbunsArtista(String usuario, String artista) {
        return albumRepository.getAlbunsArtista(usuario, artista);
    }

    public boolean contemAlbum(String usuario, String artista, String album) {
        return albumRepository.getAlbumUsuario(usuario, artista, album) != null;
    }
}
