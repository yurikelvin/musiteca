package musiteca.musiteca.service;

import musiteca.musiteca.model.Musica;
import musiteca.musiteca.repository.MusicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class MusicaService implements CrudService<Musica>{

    @Autowired
    private MusicaRepository musicaRepository;

    @Override
    public Musica create(Musica musica) {
        return musicaRepository.save(musica);
    }

    @Override
    public Musica update(Musica musica) {
        return musicaRepository.save(musica);
    }

    @Override
    public Collection<Musica> getAll() {
        return musicaRepository.findAll();
    }

    @Override
    public void removeAll() {
        musicaRepository.deleteAll();
    }

    public Collection<Musica> getMusicasUsuario(String usuario) {
        return musicaRepository.getMusicasUsuario(usuario);
    }

    public Collection<Musica> getMusicasAlbum(String usuario, String artista, String album) {
        return musicaRepository.getMusicasAlbum(usuario, artista, album);
    }

    public Collection<Musica> getMusicasArtista(String usuario, String artista) {
        return musicaRepository.getMusicasArtista(usuario, artista);
    }

    public boolean contemMusica(String usuario, String artista, String album, String musica) {
        return musicaRepository.getMusicaAlbum(usuario, artista, album, musica) != null;
    }
}
