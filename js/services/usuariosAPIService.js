angular.module("musiteca").service("usuariosAPI", function ($rootScope, usuario) {

    this.usuarios = [];

    this.adicionaUsuario = function(login, senha, nome) {
        if(!this.contemUsuario(login)) {
            this.usuarios.push(new usuario(login, senha, nome));
        }
    };

    this.contemUsuario = function(login) {
        if(this.getUsuario(login) == null) {
            return false;
        } else {
            return true;
        }
    };

    this.getUsuario = function(login) {
        let usuario = null;
        for(i = 0; i < this.usuarios.length; i ++) {
            if(this.usuarios[i].login.toLowerCase() == login.toLowerCase()) {
                usuario = this.usuarios[i];
            }
        }
        return usuario;
    };

    /* Espaco de artista */

    this.adicionaArtista = function(login, nome, imagem) {
        let usuario = this.getUsuario(login);
        usuario.adicionaArtista(nome, imagem);
        $rootScope.$broadcast('artistas:updated');
    };

    this.contemArtista = function(login, nome) {
        let usuario = this.getUsuario(login);
        return usuario.contemArtista(nome);
    };

    this.setUltimaOuvida = function(login, nomeArtista, ultima) {
        let usuario = this.getUsuario(login);
        usuario.setUltimaOuvida(nomeArtista, ultima);
    };

    this.getArtistas = function(login) {
        let usuario = this.getUsuario(login);
        return usuario.getArtistas();
    };

    /* Espaco de Album */

    this.adicionaAlbum = function(login, nomeArtista, nomeAlbum, anoLancamento, imagem) {
        let usuario = this.getUsuario(login);
        usuario.adicionaAlbum(nomeArtista, nomeAlbum, anoLancamento, imagem);
        $rootScope.$broadcast('albuns:updated');
    };

    this.getAlbuns = function(login, nomeArtista) {
        let usuario = this.getUsuario(login);
        return usuario.getAlbuns(nomeArtista);
    };

    this.contemAlbum = function(login, nomeArtista, nomeAlbum) {
        let usuario = this.getUsuario(login);
        return usuario.contemAlbum(nomeArtista, nomeAlbum);
    };

    /* Espaco de Musica */

    this.adicionaMusica = function(login, nomeArtista, nomeAlbum, nomeMusica, duracao, anolancamento) {
        let usuario = this.getUsuario(login);
        usuario.adicionaMusica(nomeArtista, nomeAlbum, nomeMusica, duracao, anolancamento);
        $rootScope.$broadcast('musicas:updated');
    };

    this.getMusicas = function(login, nomeArtista, nomeAlbum) {
        let usuario = this.getUsuario(login);
        return usuario.getMusicas(nomeArtista, nomeAlbum);
    };

    this.contemMusica = function(login, nomeArtista, nomeAlbum, nomeMusica) {
        let usuario = this.getUsuario(login);
        return usuario.contemMusica(nomeArtista, nomeAlbum, nomeMusica);
    };

    /* Espaco de Playlist */

    this.adicionaPlaylist = function(login, nomePlaylist, imagem, descricao) {
        let usuario = this.getUsuario(login);
        usuario.adicionaPlaylist(nomePlaylist, imagem, descricao);
        $rootScope.$broadcast('playlists:updated');
    };

    this.contemPlaylist = function(login, nomePlaylist) {
        let usuario = this.getUsuario(login);
        return usuario.contemPlaylist(nomePlaylist);
    };

    this.setPlaylists = function(login, playlists) {
        let usuario = this.getUsuario(login);
        usuario.setPlaylist(playlists);
        $rootScope.$broadcast('playlists:updated');
    };

    this.getPlaylists = function(login) {
        return this.getUsuario(login).getPlaylists();

    };

    this.setMusicasPlaylist = function(login,nomePlaylist, musicas) {
        let usuario = this.getUsuario(login);
        usuario.setMusicasPlaylist(nomePlaylist, musicas);
        $rootScope.$broadcast('musicasPlaylist:updated');
    };

    this.getMusicasPlaylist = function(login, nomePlaylist) {
        let usuario = this.getUsuario(login);
        return usuario.getMusicasPlaylist(nomePlaylist);
    };

    /* Espaco de Artista Favorito */
    this.adicionaFavoritos = function(login, nomeArtista) {
        let usuario = this.getUsuario(login);
        usuario.adicionaFavoritos(nomeArtista);
        $rootScope.$broadcast('artistaFavorito:updated');
    };

    this.getArtistasFavoritos = function(login) {
        let usuario = this.getUsuario(login);
        return usuario.getFavoritos();
    };

    this.setArtistasFavoritos = function(login, artistas) {
        let usuario = this.getUsuario(login);
        usuario.setFavoritos(artistas);
    };

});
