package musiteca.musiteca.service;

import musiteca.musiteca.model.*;
import musiteca.musiteca.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UsuarioService implements CrudService<Usuario>{

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public Usuario create(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public Usuario update(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public Collection<Usuario> getAll() {
        return usuarioRepository.findAll();
    }

    public Usuario getByName(String name) {
        Usuario usuarioAchado = null;
        if(usuarioRepository.exists(name)) {
            usuarioAchado = usuarioRepository.getOne(name);
        }
        return usuarioAchado;
    }

    public void removeByName(String name) {
        if(usuarioRepository.exists(name)) {
            usuarioRepository.delete(name);
        }
    }

    @Override
    public void removeAll() {
        if(usuarioRepository.count() > 0) {
            usuarioRepository.deleteAll();
        }
    }

    public boolean contemUsuario(String usuario) {
        return usuarioRepository.exists(usuario);
    }
}
