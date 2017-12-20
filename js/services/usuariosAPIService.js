angular.module("musiteca").factory("usuariosAPI", function ($http, config) {

    let  usuario = {};

    let login = function() {
        return localStorage.getItem("login");
    };

    let _setUser = function(user) {
         usuario = user;
    };

    let _getArtistas = function() {
        return $http.get(config.baseUrl + "/u/" + login() + "/artistas");
    };

    let _getAlbuns = function() {
        return $http.get(config.baseUrl + "/u/" + login() + "/albuns");
    };

    let _getAlbunsArtista = function(artista) {
        return $http.get(config.baseUrl + "/u/" + login() + "/albuns/" + artista);
    };

    let _getMusicas = function() {
        return $http.get(config.baseUrl + "/u/" + login() + "/musicas");
    };

    let _getMusicasArtista = function(artista) {
        return $http.get(config.baseUrl + "/u/" + login() + "/musicas/" + artista);
    };

    let _getMusicasAlbum = function(artista, album) {
        return $http.get(config.baseUrl + "/u/" + login() + "/musicas/" + artista + "/" + album);
    };

    let _getFavoritos = function() {
        return $http.get(config.baseUrl + "/u/" + login() + "/favoritos");
    };

    let _getPlaylists = function() {
        return $http.get(config.baseUrl + "/u/" + login() + "/playlists");
    };

    let _saveArtista = function(artista) {
        return $http.post(config.baseUrl + "/u/" + login() + "/artistas", artista, {headers:{'Content-Type': 'application/json'}});
    };

    let _saveAlbum = function(album) {
        return $http.post(config.baseUrl + "/u/" + login() + "/albuns", album, {headers:{'Content-Type': 'application/json'}});
    };

    let _saveMusica = function(musica) {
        return $http.post(config.baseUrl + "/u/" + login() + "/musicas", musica, {headers:{'Content-Type': 'application/json'}});
    };

    let _saveFavorito = function(artista) {
        return $http.post(config.baseUrl + "/u/" + login() + "/favoritos", artista, {headers:{'Content-Type': 'application/json'}});
    };

    let _savePlaylist = function(playlist) {
        return $http.post(config.baseUrl + "/u/" + login() + "/playlists", playlist, {headers:{'Content-Type': 'application/json'}});
    };

    let _contemArtista = function(artista) {
        return $http.post(config.baseUrl + "/u/" + login() + "/artistas/e", artista, {headers:{'Content-Type': 'application/json'}});
    };

    let _contemAlbum = function(album) {
        return $http.post(config.baseUrl + "/u/" + login() + "/albuns/e", album, {headers:{'Content-Type': 'application/json'}});
    };

    let _contemUsuario = function(usuario) {
        return $http.post(config.baseUrl + "/e", usuario, {headers:{'Content-Type': 'application/json'}});
    };

    let _contemMusica = function(musica) {
        return $http.post(config.baseUrl + "/u/" + login() + "/musicas/e", musica, {headers:{'Content-Type': 'application/json'}});
    };

    let _contemPlaylist = function(playlist) {
        return $http.post(config.baseUrl + "/u/" + login() + "/playlists/e", playlist, {headers:{'Content-Type': 'application/json'}});
    };

    let _deletePlaylist = function(nomeplaylist) {
        return $http.delete(config.baseUrl + "/u/" + login() + "/playlists/" + nomeplaylist);
    };

    let _deleteFavorito = function(nomeArtista) {
        return $http.delete(config.baseUrl + "/u/" + login() + "/favoritos/" + nomeArtista);
    };

    let _saveUsuario = function(usuario) {
      return $http.post(config.baseUrl, usuario, {headers:{'Content-Type': 'application/json'}});
    };

    return {

        setUser: _setUser,
        getArtistas: _getArtistas,
        getAlbuns: _getAlbuns,
        getFavoritos: _getFavoritos,
        getMusicas: _getMusicas,
        getPlaylists: _getPlaylists,
        getAlbunsArtista: _getAlbunsArtista,
        getMusicasArtista: _getMusicasArtista,
        getMusicasAlbum: _getMusicasAlbum,
        saveArtista: _saveArtista,
        saveAlbum: _saveAlbum,
        saveMusica: _saveMusica,
        saveFavorito: _saveFavorito,
        savePlaylist: _savePlaylist,
        contemArtista: _contemArtista,
        contemAlbum: _contemAlbum,
        contemMusica: _contemMusica,
        contemPlaylist: _contemPlaylist,
        contemUsuario: _contemUsuario,
        deletePlaylist: _deletePlaylist,
        deleteFavorito: _deleteFavorito,
        saveUsuario: _saveUsuario
    };
});
