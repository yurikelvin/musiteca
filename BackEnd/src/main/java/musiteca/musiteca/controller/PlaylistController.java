package musiteca.musiteca.controller;

import musiteca.musiteca.model.Playlist;
import musiteca.musiteca.service.PlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class PlaylistController {

    @Autowired
    private PlaylistService playlistService;

    @RequestMapping(value="usuarios/u/{name}/playlists",method= RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<Playlist>> getPlaylists(@PathVariable String name) {
        return new ResponseEntity<>(playlistService.getPlaylistsUsuario(name), HttpStatus.OK);
    }

    @RequestMapping(value="usuarios/u/{name}/playlists/e",method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> hasPlaylist(@PathVariable String name, @RequestBody Playlist playlist) {
        HttpStatus resp = HttpStatus.OK;
        if(playlistService.contemPlaylist(name, playlist.getNome())) {
            resp = HttpStatus.NOT_ACCEPTABLE;
        }
        return new ResponseEntity<>(resp);
    }


    @RequestMapping(value="usuarios/u/{name}/playlists",method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Playlist> cadastraPlaylist(@PathVariable String name, @RequestBody Playlist playlist) {
        playlist.setUsuario(name);
        Playlist playlistCadastrada = playlistService.create(playlist);
        return new ResponseEntity<>(playlistCadastrada, HttpStatus.OK);
    }

    @RequestMapping(value="usuarios/u/{name}/playlists/{nomeplaylist}",method= RequestMethod.DELETE)
    public ResponseEntity<Void> deletaPlaylist(@PathVariable String name, @PathVariable String nomeplaylist) {
        HttpStatus resp = HttpStatus.NOT_FOUND;

        if(playlistService.contemPlaylist(name, nomeplaylist)) {
            playlistService.removePlaylist(name, nomeplaylist);
            resp = HttpStatus.OK;
        }
        return new ResponseEntity<>(resp);
    }


}
