package musiteca.musiteca.service;

import musiteca.musiteca.model.Playlist;
import musiteca.musiteca.repository.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class PlaylistService implements CrudService<Playlist>{

    @Autowired
    private PlaylistRepository playlistRepository;

    // Pode haver erro nesta classe pois playlists usa musicas do sistema.
    @Override
    public Playlist create(Playlist playlist) {
        return playlistRepository.save(playlist);
    }

    @Override
    public Playlist update(Playlist playlist) {
        return playlistRepository.save(playlist);
    }

    @Override
    public Collection<Playlist> getAll() {
        return playlistRepository.findAll();
    }

    @Override
    public void removeAll() {
        playlistRepository.deleteAll();
    }

    public Collection<Playlist> getPlaylistsUsuario(String usuario) {
        return playlistRepository.getPlaylistsUsuario(usuario);
    }

    public boolean contemPlaylist(String usuario, String playlist) {
        return playlistRepository.getPlaylistUsuario(usuario, playlist) != null;
    }

    public void removePlaylist(String usuario, String playlist) {
        Playlist playlistBuscada = playlistRepository.getPlaylistUsuario(usuario, playlist);
        playlistBuscada.setMusicas(null);
        playlistRepository.delete(playlistBuscada);
    }
}
