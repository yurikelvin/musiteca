angular.module("musiteca").service("usuario", function(artista, playlist) {
    return function(login, senha, nome) {
        this.artistas = [];
        this.playlists = [];
        this.favoritos = [];
        this.nome = nome;
        this.senha = senha;
        this.login = login;

        this.getNome = function() {
            return this.nome;
        };

        this.getSenha = function() {
            return this.senha;
        };

        this.getLogin = function() {
            return this.login;
        }
        /* Aqui começa os artistas */
        this.adicionaArtista = function(nome, imagem) {
            if(!this.contemArtista(nome)) {
                if(imagem == null) {
                    imagem = "https://www.atomix.com.au/media/2015/06/atomix_user31.png";
                }

                this.artistas.push(new artista(nome, imagem));
            }
        };

        this.setUltimaOuvida = function(artistaNome, ultima) {
            let artista = this.getArtista(artistaNome);

            artista.setUltimaOuvida(ultima);
        };

        this.getArtista = function(nome) {
            let artista = null;
            for(i = 0; i < this.artistas.length; i++) {
                if(this.artistas[i].getNome().toLowerCase() == nome.toLowerCase()) {
                    artista = this.artistas[i];
                }
            }

            return artista;
        };

        this.getArtistas = function() {
            return this.artistas;
        };

        this.contemArtista = function(nome) {
            if(this.getArtista(nome) == null) {
                return false;
            }

            return true;
        };

        /* Aqui começa os Álbuns */

        this.adicionaAlbum = function(nomeArtista, nomeAlbum, anolancamento, imagem) {
            let artista = this.getArtista(nomeArtista);

            artista.adicionaAlbum(nomeAlbum, anolancamento, nomeArtista, imagem);
        };

        this.getAlbuns = function(nomeArtist) {
            let albunsCadastrados = [];

            if(nomeArtist != null) {
                albunsCadastrados = this.getArtista(nomeArtist).getAlbuns();
            } else {
                for(i = 0; i < this.artistas.length; i ++) {
                    let albunsDaVez = this.artistas[i].albuns;
                    for(k = 0; k < albunsDaVez.length; k++) {
                        albunsCadastrados.push(albunsDaVez[k]);
                    }
                };
            }

            return albunsCadastrados;

        };

        this.contemAlbum = function(nomeArtist, nomeAlbum) {
            let artista = this.getArtista(nomeArtist);

            return artista.contemAlbum(nomeAlbum);
        };

        /** Aqui começa as músicas */

        this.adicionaMusica = function(nomeArtista, nomeAlbum, nomeMusica, duracao, anolancamento) {
            let artista = this.getArtista(nomeArtista);
            artista.adicionaMusica(nomeAlbum, nomeMusica, duracao, anolancamento, nomeArtista);
        };

        this.getMusicas = function(nomeArtista, nomeAlbum) {
            let musicasCadastradas = [];
            if(nomeArtista == null && nomeAlbum == null) {
                for(i = 0; i < this.artistas.length; i ++) {
                    musicasCadastradas.push(...this.artistas[i].getMusicas());
                }
            } else {
                if(nomeArtista != null && nomeAlbum == null) {
                    return this.getArtista(nomeArtista).getMusicas();
                }
                let artista = this.getArtista(nomeArtista);
                musicasCadastradas = artista.getMusicas(nomeAlbum);
            }

            return musicasCadastradas;

        };

        this.contemMusica = function(nomeArtista, nomeAlbum, nomeMusica) {
            let artista = this.getArtista(nomeArtista);
            return artista.contemMusica(nomeAlbum, nomeMusica);
        };

        /* Aqui começa as playlists */

        this.adicionaPlaylist = function(nome, imagem, descricao) {
            if(!this.contemPlaylist(nome)) {
                this.playlists.push(new playlist(nome, imagem, descricao));
            }
        };

        this.contemPlaylist = function(nomePlaylist) {
            let contem = false;

            for(i = 0; i < this.playlists.length; i++) {
                if(this.playlists[i].nome.toLowerCase() == nomePlaylist.toLowerCase()) {
                    contem = true;
                }
            }

            return contem;
        };

        this.setPlaylist = function(playlists) {
            this.playlists = playlists;
        };

        this.getPlaylists = function() {
            return this.playlists;
        };

        this.getPlaylist = function(nomePlaylist) {
            let playlist = null;

            for(i = 0; i < this.playlists.length; i++) {
                if(this.playlists[i].nome.toLowerCase() == nomePlaylist.toLowerCase()) {
                    playlist = this.playlists[i];
                }
            }

            return playlist;
        };

        this.setMusicasPlaylist = function(nomePlaylist, musicas) {
            let playlist = this.getPlaylist(nomePlaylist);

            playlist.setMusicasPlaylist(musicas);
        };

        this.getMusicasPlaylist = function(nomePlaylist) {
            let playlist = this.getPlaylist(nomePlaylist);
            return playlist.getMusicasPlaylist();
        }

        /* Favoritos */

        this.setFavoritos = function(favoritos) {
            this.favoritos = favoritos;
        };

        this.adicionaFavoritos = function(nomeArtista) {
            let artista = this.getArtista(nomeArtista);
            artista.favorito = true;
            this.favoritos.push(artista);
        };

        this.getFavoritos = function() {
            return this.favoritos;
        };



    };

});
