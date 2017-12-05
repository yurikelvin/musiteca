angular.module("musiteca").service("album", function(musica) {
    return function(nome, anolancamento, nomeArtista, imagem) {
        this.musicas = [];
        this.nome = nome;
        this.ano = anolancamento;
        this.imagem = imagem;
        this.artistaNome = nomeArtista;

        this.getMusicas = function() {
            return this.musicas;
        }

        this.getNome = function() {
            return this.nome;
        };

        this.getImagem = function() {
            return this.imagem;
        };

        this.getDuracao = function() {
            return this.duracao;
        };

        this.getAnoLancamento = function () {
            return this.ano;
        };

        this.getAnoLancamentoMusica = function(nome) {
            return this.getMusica(nome).getAnoLancamento();
        };

        this.getDuracaoMusica = function(nome) {
            return this.getMusica(nome).getDuracao();
        };

        this.getNomeMusica = function(nome) {
            return this.getMusica(nome).getNome();
        };

        this.getMusica = function(nome) {
            let musica = null;
            for( i = 0; i < this.musicas.length; i ++) {
                if(this.musicas[i].getNome().toLowerCase() == nome.toLowerCase()) {
                    musica = this.musicas[i];
                }
            }

            return musica;
        };

        this.adicionaMusica = function (nome, duracao, anolancamento, nomeAlbum, nomeArtista) {
            if(!this.contemMusica(nome)) {
                this.musicas.push(new musica(nome, duracao, anolancamento, nomeAlbum, nomeArtista));
            }
        };

        this.contemMusica = function(nome) {
            if(this.getMusica(nome) == null) {
                return false;
            } else {
                return true;
            }
        };
    };


 });
