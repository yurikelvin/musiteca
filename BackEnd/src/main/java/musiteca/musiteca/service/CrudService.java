package musiteca.musiteca.service;

import java.util.Collection;

public interface CrudService<T> {

    T create(T t);

    T update(T t);

    Collection<T> getAll();

    void removeAll();

}