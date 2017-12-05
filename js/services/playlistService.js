angular.module("musiteca").service("playlist", function() {
    return function(nome, imagem, descricao) {
        this.musicas = [];
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;

        this.adicionaMusicas = function(musicas) {
            this.musicas.push(...musicas);
        };

        this.getMusicasPlaylist = function() {
            return this.musicas;
        };

        this.setMusicasPlaylist = function(musicas) {
            this.musicas = musicas;
        };
    };

});
