package musiteca.musiteca.controller;


import musiteca.musiteca.model.Artista;
import musiteca.musiteca.service.ArtistaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
@RestController
public class ArtistaController {

    @Autowired
    private ArtistaService artistaService;


    @RequestMapping(value="usuarios/u/{name}/artistas",method= RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<Artista>> getArtistas(@PathVariable String name) {
        return new ResponseEntity<>(artistaService.getArtistasUsuario(name) ,HttpStatus.OK);
    }

    @RequestMapping(value="usuarios/u/{name}/artistas/e",method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> getArtista(@PathVariable String name, @RequestBody Artista artista) {
        HttpStatus resp = HttpStatus.OK;
        if(artistaService.contemArtista(name, artista.getNome())) {
            resp = HttpStatus.NOT_ACCEPTABLE;
        }
        return new ResponseEntity<>(resp);
    }

    @RequestMapping(value="usuarios/u/{name}/artistas",method=RequestMethod.POST, consumes= MediaType.APPLICATION_JSON_VALUE, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Artista> cadastraArtista(@PathVariable String name, @RequestBody Artista artista) {
        artista.setUsuario(name);
        Artista artistaCriado = artistaService.create(artista);
        return new ResponseEntity<>(artistaCriado, HttpStatus.CREATED);
    }

    @RequestMapping(value="usuarios/u/{name}/favoritos",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Collection<Artista>> getFavoritos(@PathVariable String name) {
        Collection<Artista> artistasFavoritos = artistaService.getArtistasFavoritos(name);
        return new ResponseEntity<>(artistasFavoritos, HttpStatus.OK);
    }

    @RequestMapping(value="usuarios/u/{name}/favoritos",method=RequestMethod.POST, consumes= MediaType.APPLICATION_JSON_VALUE, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> cadastraFavorito(@PathVariable String name, @RequestBody Artista artista) {
        artistaService.adicionaFavorito(name, artista.getNome());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value="usuarios/u/{name}/favoritos/{artista}",method=RequestMethod.DELETE)
    public ResponseEntity<Void> deletaFavorito(@PathVariable String name, @PathVariable String artista) {
        HttpStatus resp = HttpStatus.NOT_FOUND;
        if(artistaService.contemArtista(name, artista)) {
            artistaService.removeFavorito(name, artista);
            resp = HttpStatus.OK;
        }
        return new ResponseEntity<>(resp);
    }



}
