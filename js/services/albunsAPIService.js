angular.module("musiteca").factory("albunsAPI", function() {

	var albunsData = [];
	var musicasData = [];
	var id = 0;
	var idMusic = 0;

	pegaAlbum = function(id) {

		var album = null;

		var _id = parseInt(id);

		for(i = 0; i < albunsData.length; i ++) {
			if(albunsData[i] != null) {
				if(albunsData[i].idAlbum == _id) {
					album = albunsData[i];
				}
			}
		}

		return album;
	}

	return {

		getAlbuns: function() {
			return albunsData;
		},

		getAlbum: function(id) {

			var album = null;

			_id = parseInt(id);

			for(i = 0; i < albunsData.length; i ++) {
				if(albunsData[i] != null) {
					if(albunsData[i].idAlbum == _id) {
						album = albunsData[i];
					}
				}
			}

			return album;
		},

		getMusicasAlbum: function(idAlbum) {
			var album = pegaAlbum(idAlbum);

			return album.musicas;

		},

		addMusic: function(musica, idAlbum) {
			var album = pegaAlbum(idAlbum);

			musica.idMusic = ++idMusic;
			musica.nomeArtist = album.artistaNome;
			musica.albumNome = album.nome;
			musica.idArtist = album.idArtist;

			musicasData.push(musica);

			if(album.musicas == null) {
				album.musicas = [];
			}

			album.musicas.push(musica);
		},

		getMusicas: function() {
			return musicasData;
		},

		addAlbum: function(idArtist, album) {
			album.idAlbum = ++id;
			album.idArtist = idArtist;
			albunsData.push(album);
		},

		setAlbum: function(album) {
			albunsData = album;
		},

		resetAlbum: function() {
			albunsData = [];
		}, 

		hasAlbum: function(album) {
			var resposta = false;

			for(i = 0; i < albunsData.length; i ++) {
				if(albunsData[i].nome.toLowerCase() == album.nome.toLowerCase()) {
					resposta = true;
				}
			}

			return resposta;

		},

		hasMusic: function(musica, idAlbum) {
			var resposta = false;

			var album = pegaAlbum(idAlbum);

			if(album != null && album.musicas != null) {

				for(i = 0; i < album.musicas.length; i ++){
					if(album.musicas[i].nome.toLowerCase() == musica.nome.toLowerCase()) {
						resposta = true;
					}
				}
			}

			return resposta;

		}

	};
});