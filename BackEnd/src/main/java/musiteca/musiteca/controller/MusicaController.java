package musiteca.musiteca.controller;

import musiteca.musiteca.model.Musica;
import musiteca.musiteca.service.MusicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@RestController
public class MusicaController {

    @Autowired
    private MusicaService musicaService;

    @RequestMapping(value="usuarios/u/{name}/musicas",method= RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<Musica>> getMusicas(@PathVariable String name) {
        Collection<Musica> musicasCadastradas = musicaService.getMusicasUsuario(name);
        return new ResponseEntity<>(musicasCadastradas, HttpStatus.OK);
    }

    @RequestMapping(value="usuarios/u/{name}/musicas/e", method=RequestMethod.POST, consumes= MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> hasMusica(@PathVariable String name, @RequestBody Musica musica) {
        HttpStatus resp = HttpStatus.OK;
        if(musicaService.contemMusica(name, musica.getNomeArtist(), musica.getAlbumNome(), musica.getNome())) {
            resp = HttpStatus.NOT_ACCEPTABLE;
        }
        return new ResponseEntity<>(resp);
    }


    @RequestMapping(value="usuarios/u/{name}/musicas", method=RequestMethod.POST, consumes= MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Musica> cadastraMusica(@PathVariable String name, @RequestBody Musica musica) {
        musica.setUsuario(name);
        Musica musicaCadastrada = musicaService.create(musica);
        return new ResponseEntity<>(musicaCadastrada, HttpStatus.CREATED);
    }

    @RequestMapping(value="usuarios/u/{name}/musicas/{artista}/{album}",method= RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<Musica>> getMusicasAlbum(@PathVariable String name, @PathVariable String artista, @PathVariable String album) {
        Collection<Musica> musicasAlbum = musicaService.getMusicasAlbum(name, artista, album);
        return new ResponseEntity<>(musicasAlbum, HttpStatus.OK);
    }

    @RequestMapping(value="usuarios/u/{name}/musicas/{artista}",method= RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<Musica>> getMusicasArtista(@PathVariable String name, @PathVariable String artista) {
        Collection<Musica> musicasAlbum = musicaService.getMusicasArtista(name, artista);
        return new ResponseEntity<>(musicasAlbum, HttpStatus.OK);
    }



}
