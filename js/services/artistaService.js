angular.module("musiteca").service("artista", function(album) {
    return function(nome, imagem) {
        this.albuns = [];
        this.nome = nome;
        this.imagem = imagem;
        this.ultimaOuvida = "Não definido ainda";
        this.favorito = false;

        this.setUltimaOuvida = function(ultima) {
            this.ultimaOuvida = ultima;
        };


        this.getAlbuns = function() {
            return this.albuns;
        };

        this.getNome = function() {
            return this.nome;
        };

        this.getAnoLancamentoAlbum = function () {
            return this.getAlbum(nome).getAnoLancamento();
        };

        this.getAnoLancamentoMusica = function(nomeAlbum, nome) {
            return this.getAlbum(nome).getAnoLancamentoMusica(nome);
        };

        this.getDuracaoMusica = function(nomeAlbum, nome) {
            return this.getAlbum(nomeAlbum).getDuracaoMusica(nome);
        };

        this.getMusicas = function(nomeAlbum) {
            if(nomeAlbum != null) {
                return this.getAlbum(nomeAlbum).getMusicas();
            } else {
                let musicasArtista = [];
                for(i = 0; i < this.albuns.length; i++) {
                    musicasArtista.push(...this.albuns[i].getMusicas());
                }

                return musicasArtista;
            }
        };


        this.getMusica = function(nomeAlbum, nome) {
            let album = this.getAlbum(nomeAlbum);

            if(album != null) {
                return album.getMusica(nome);
            }

            return null;
        };

        this.getAlbum = function(nome) {
            let album = null;
            for( i = 0; i < this.albuns.length; i ++) {
                if(this.albuns[i].getNome().toLowerCase() === nome.toLowerCase()) {
                    album = this.albuns[i];
                }
            }

            return album;
        };

        this.adicionaAlbum = function(nome, anoLancamento, nomeArtista, imagem) {
            if(!this.contemAlbum(nome)) {
                this.albuns.push(new album(nome, anoLancamento, nomeArtista, imagem))
            }
        };

        this.adicionaMusica = function (nomeAlbum, nome, duracao, anolancamento, nomeArtista) {
            let album = this.getAlbum(nomeAlbum);
            if(album != null) {
                album.adicionaMusica(nome, duracao, anolancamento, nomeAlbum, nomeArtista);
            }
        };

        this.contemMusica = function(nomeAlbum, nomeMusica) {
            let album = this.getAlbum(nomeAlbum);
            if(album == null) {
                return false;
            } else {
                return album.contemMusica(nomeMusica);
            }
        };

        this.contemAlbum = function(nomeAlbum) {
            return this.getAlbum(nomeAlbum) != null;


        };
    };


 });
