package musiteca.musiteca.controller;


import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import musiteca.musiteca.model.Usuario;
import musiteca.musiteca.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import java.util.Date;

@RestController
public class LoginController {

    @Autowired
    UsuarioService usuarioService;

    @RequestMapping(value="/autenticar", consumes= MediaType.APPLICATION_JSON_VALUE, method= RequestMethod.POST)
    public ResponseEntity<LoginResponse> autenticar(@RequestBody Usuario usuario) throws ServletException {


        if(usuario.getEmail() == null || usuario.getSenha() == null) {
            return new ResponseEntity<>(new LoginResponse("deu ruim amigo"), HttpStatus.NOT_ACCEPTABLE);
        }

        Usuario usuAutenticado = usuarioService.getByName(usuario.getEmail());


        if(usuAutenticado == null) {
            return new ResponseEntity<>(new LoginResponse("deu ruim amigo"), HttpStatus.NOT_FOUND);
        }

        if(!usuario.getSenha().equals(usuAutenticado.getSenha())) {
            return new ResponseEntity<>(new LoginResponse("deu ruim amigo"), HttpStatus.UNAUTHORIZED);
        }
        Integer HORAS = 3600 * 1000;
        String token = Jwts.builder()
                .setSubject(usuario.getEmail())
                .signWith(SignatureAlgorithm.HS512,"banana")
                .setExpiration(new Date(System.currentTimeMillis() + 24 * HORAS))
                .compact();

        return new ResponseEntity<>(new LoginResponse(token), HttpStatus.OK);
    }

    private class LoginResponse {
        String token;

        public LoginResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }

    }
}
