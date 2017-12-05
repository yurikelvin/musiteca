angular.module("musiteca").service("musica", function() {
    return function(nome, duracao, anolancamento, albumNome, nomeArtist) {
        this.nome = nome;
        this.duracao = duracao;
        this.ano = anolancamento;
        this.albumNome = albumNome;
        this.nomeArtist = nomeArtist;

        this.getNome = function() {
            return this.nome;
        };

        this.getDuracao = function() {
            return this.duracao;
        };

        this.getAnoLancamento = function () {
            return this.anolancamento;
        };
    };


 });
