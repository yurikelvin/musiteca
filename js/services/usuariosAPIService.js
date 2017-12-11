angular.module("musiteca").service("usuariosAPI", function ($rootScope, usuario) {

    this.user = new usuario("tsubakker", "123", "yuri");
    this.user.role = "user";

    // this.adicionaUsuario = function(login, senha, nome) {
    //     if(!this.contemUsuario(login)) {
    //         this.usuarios.push(new usuario(login, senha, nome));
    //     }
    // };
    //
    // this.contemUsuario = function(login) {
    //     return this.getUsuario(login) == null;
    // };
    //
    this.getUser = function() {

        return this.user;
    };

    /* Espaco de artista */

    this.adicionaArtista = function(nome, imagem) {
        this.user.adicionaArtista(nome, imagem);
        $rootScope.$broadcast('artistas:updated');
    };

    this.contemArtista = function(nome) {
        return this.user.contemArtista(nome);
    };

    this.setUltimaOuvida = function(nomeArtista, ultima) {
        this.user.setUltimaOuvida(nomeArtista, ultima);
    };

    this.getArtistas = function() {
        return this.user.getArtistas();
    };

    /* Espaco de Album */

    this.adicionaAlbum = function(nomeArtista, nomeAlbum, anoLancamento, imagem) {
        this.user.adicionaAlbum(nomeArtista, nomeAlbum, anoLancamento, imagem);
        $rootScope.$broadcast('albuns:updated');
    };

    this.getAlbuns = function(nomeArtista) {
        return this.user.getAlbuns(nomeArtista);
    };

    this.contemAlbum = function(nomeArtista, nomeAlbum) {
        return this.user.contemAlbum(nomeArtista, nomeAlbum);
    };

    /* Espaco de Musica */

    this.adicionaMusica = function(nomeArtista, nomeAlbum, nomeMusica, duracao, anolancamento) {
        this.user.adicionaMusica(nomeArtista, nomeAlbum, nomeMusica, duracao, anolancamento);
    };

    this.getMusicas = function(nomeArtista, nomeAlbum) {
        return this.user.getMusicas(nomeArtista, nomeAlbum);
    };

    this.contemMusica = function(nomeArtista, nomeAlbum, nomeMusica) {
        return this.user.contemMusica(nomeArtista, nomeAlbum, nomeMusica);
    };

    /* Espaco de Playlist */

    this.adicionaPlaylist = function(nomePlaylist, imagem, descricao) {
        this.user.adicionaPlaylist(nomePlaylist, imagem, descricao);
        $rootScope.$broadcast('playlists:updated');
    };

    this.contemPlaylist = function(nomePlaylist) {
        return this.user.contemPlaylist(nomePlaylist);
    };

    this.setPlaylists = function(playlists) {
        this.user.setPlaylist(playlists);
        $rootScope.$broadcast('playlists:updated');
    };

    this.getPlaylists = function() {
        return this.user.getPlaylists();

    };

    this.setMusicasPlaylist = function(nomePlaylist, musicas) {
        this.user.setMusicasPlaylist(nomePlaylist, musicas);
        $rootScope.$broadcast('musicasPlaylist:updated');
    };

    this.getMusicasPlaylist = function(nomePlaylist) {
        return this.user.getMusicasPlaylist(nomePlaylist);
    };

    /* Espaco de Artista Favorito */
    this.adicionaFavoritos = function(nomeArtista) {
        this.user.adicionaFavoritos(nomeArtista);
        $rootScope.$broadcast('artistaFavorito:updated');
    };

    this.getArtistasFavoritos = function() {
        return this.user.getFavoritos();
    };

    this.setArtistasFavoritos = function(artistas) {
        this.user.setFavoritos(artistas);
    };

    console.log("eu executei ein");

});
