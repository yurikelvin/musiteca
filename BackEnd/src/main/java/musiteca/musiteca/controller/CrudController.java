package musiteca.musiteca.controller;

import org.springframework.http.ResponseEntity;

import java.util.Collection;

public interface CrudController<T> {

    ResponseEntity<T> cadastrar(T t);

    ResponseEntity<T> get(String id);

    ResponseEntity<T> modificar(String id, T t);

    ResponseEntity<Collection<T>> getAll();

    ResponseEntity<Void> deletar(String id);

    ResponseEntity<Void> deletarTodos();
}
