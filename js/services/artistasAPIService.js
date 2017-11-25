angular.module("musiteca").factory("artistasAPI", ["albunsAPI", function(albunsAPI) {

	var artistasData = [];
	var id = 0;

	getArtist = function(id) {
		var artista = null;

		var _id = parseInt(id);

		for(i = 0; i < artistasData.length; i ++) {
			if(artistasData[i] != null) {
				if(artistasData[i].id == _id) {
					artista = artistasData[i];
				}
			}
		}

		return artista;
	};

	return {

		getArtistas: function() {
			return artistasData;
		},

		getArtista: function(id) {

			return getArtist(id);
		},

		getAlbuns: function(id) {
			var artista = getArtist(id);

			return artista.albuns;
		},

		getAlbum: function(idAlbum) {
			return albunsAPI.getAlbum(idAlbum);
		},

		addAlbum: function(id, album) {

			var artista = getArtist(id);

			album.artistaNome = artista.nome;

			if(artista.albuns == null) {
				artista.albuns = [];
			}


			artista.albuns.push(album);
			albunsAPI.addAlbum(id, album);
		},

		getMusicas: function(id) {
			var artista = getArtist(id);
			var musicas = [];

			var albuns = artista.albuns;

			if(albuns != null) {
				for(i = 0; i < albuns.length; i ++) {
					var musicasDaVez = albuns[i].musicas;
					if(musicasDaVez != null) {
						for(k = 0; k < musicasDaVez.length; k ++) {
							musicas.push(musicasDaVez[k]);
						}
					}
				}
			}
			return musicas;
		},

		getAlbuns: function() {
			return albunsAPI.getAlbuns();
		},

		addArtista: function(artista) {
			artista.id = ++id;
			artista.ultimaOuvida = "Não definido ainda";
			artista.statusCheck = true;
			if(artista.imagem == null) {
				artista.imagem = "https://www.atomix.com.au/media/2015/06/atomix_user31.png";
			}
			artistasData.push(artista);
		},

		addMusic: function(musica, idAlbum) {
			albunsAPI.addMusic(musica, idAlbum);
		},

		setArtistas: function(artistas) {
			artistasData = artistas;
		},

		resetArtistas: function() {
			artistasData = [];
		},

		getMusicasAlbum: function(id) {
			return albunsAPI.getMusicasAlbum(id);
		},

		hasAlbum: function(album) {
			return albunsAPI.hasAlbum(album);
		},

		hasMusic: function(music, idAlbum) {
			return albunsAPI.hasMusic(music, idAlbum);
		}

	};
}]);