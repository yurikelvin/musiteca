package musiteca.musiteca.controller;

import musiteca.musiteca.model.Album;
import musiteca.musiteca.service.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class AlbumController {

    @Autowired
    private AlbumService albumService;

    @RequestMapping(value="usuarios/u/{name}/albuns",method= RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<Album>> getAlbuns(@PathVariable String name) {
        Collection<Album> albunsCadastrados = albumService.getAlbunsUsuario(name);
        return new ResponseEntity<>(albunsCadastrados, HttpStatus.OK);
    }

    @RequestMapping(value="usuarios/u/{name}/albuns/e",method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE, consumes= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> hasAlbum(@PathVariable String name, @RequestBody Album album) {
        HttpStatus resp = HttpStatus.OK;
        if(albumService.contemAlbum(name, album.getArtistaNome(), album.getNome())) {
            resp = HttpStatus.NOT_ACCEPTABLE;
        }
        return new ResponseEntity<>(resp);
    }

    @RequestMapping(value="usuarios/u/{name}/albuns",method=RequestMethod.POST, consumes= MediaType.APPLICATION_JSON_VALUE, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Album> cadastraAlbum(@PathVariable String name, @RequestBody Album album) {
        album.setUsuario(name);
        Album albumCadastrado = albumService.create(album);
        return new ResponseEntity<>(albumCadastrado, HttpStatus.CREATED);
    }

    @RequestMapping(value="usuarios/u/{name}/albuns/{artista}",method= RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<Album>> getAlbunsArtista(@PathVariable String name, @PathVariable String artista) {
        Collection<Album> albunsArtista = albumService.getAlbunsArtista(name, artista);
        return new ResponseEntity<>(albunsArtista, HttpStatus.OK);
    }

}
