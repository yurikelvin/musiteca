angular.module("musiteca").service("usuariosAPI", function ($rootScope, usuario, $http) {

    this.user = new usuario();

    let that = this;

    this.buildUser = function(data) {
        this.user = new usuario(data.login, data.senha, data.nome);

        var carrega = function() {
            $http.get("http://localhost:8080/usuarios/u/" + data.login + "/artistas")
                .then(function (response) {
                    loadArtistas(response.data);
                    carregaAlbuns();
                }, function (response) {
                    console.log(response.status);
                });
        };

        let carregaAlbuns = function () {
            $http.get("http://localhost:8080/usuarios/u/" + data.login + "/albuns")
                .then(function (response) {
                    loadAlbuns(response.data);
                    carregaMusicas();
                }, function (response) {
                    console.log(response.status);
                });
        };

        let carregaMusicas = function() {
            $http.get("http://localhost:8080/usuarios/u/" + data.login + "/musicas")
                .then(function (response) {
                    loadMusicas(response.data);
                    carregaPlaylists();
                    carregaFavoritos();
                }, function (response) {
                    console.log(response.status);
                });
        };

        let carregaPlaylists = function() {
          $http.get("http://localhost:8080/usuarios/u/" + data.login + "/playlists")
              .then(function(response) {
                  loadPlaylists(response.data)
              }, function(response) {

              })
        };

        let carregaFavoritos = function() {
            $http.get("http://localhost:8080/usuarios/u/" + data.login + "/favoritos")
                .then(function(response) {
                    loadFavoritos(response.data);
                }, function(response) {

                })
        };

        carrega();

    };

    let loadArtistas = function (data) {
        let artistas = data;
        for(i = 0; i < artistas.length; i ++) {
            let artistaDaVez = artistas[i];
            that.adicionaArtista(artistaDaVez.nome, artistaDaVez.imagem);
        }
    };

    let loadAlbuns = function(data) {
        let albuns = data;
        for(i = 0; i < albuns.length; i ++) {
            let albumDaVez = albuns[i];
            that.adicionaAlbum(albumDaVez.artistaNome, albumDaVez.nome, albumDaVez.ano, albumDaVez.imagem);
        }
    };

    let loadMusicas = function(data) {
        let musicas = data;
        for(i = 0; i < musicas.length; i++) {
            let musicaDaVez = musicas[i];
            that.adicionaMusica(musicaDaVez.nomeArtist, musicaDaVez.albumNome, musicaDaVez.nome, musicaDaVez.duracao, musicaDaVez.ano);
        }
    };

    let loadFavoritos = function(data) {
        this.favoritos = data;
    };

    let loadPlaylists = function(data) {
        let playlists = data;
        for(i = 0; i < playlists.length; i++) {
            let playlist = playlists[i];
            that.adicionaPlaylist(playlist.nome, playlist.imagem, playlist.descricao);
            let musicas = playlist.musicas;
            that.setMusicasPlaylist(playlist.nome, musicas);
        }
    };

    this.carregaUsuario = function(login, token) {
        localStorage.setItem("login", login);
        $http.get("http://localhost:8080/usuarios/u/" + login)
            .then(function(response) {
                that.buildUser(response.data);
                console.log("ta carregando chefe");
            }, function(response) {

            })
    };

    this.updateUser = function() {
      let usuario = this.getUser();
      $http.put("http://localhost:8080/usuarios/u/" + usuario.login, usuario);
    };

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
        $rootScope.$broadcast('musicas:updated');
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


});
