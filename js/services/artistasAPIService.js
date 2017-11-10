angular.module("musiteca").factory("artistasAPI", function() {

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

			var artista = null;

			_id = parseInt(id);

			for(i = 0; i < artistasData.length; i ++) {
				if(artistasData[i] != null) {
					if(artistasData[i].id == _id) {
						artista = artistasData[i];
					}
				}
			}

			return artista;
		},

		getAlbuns: function(id) {
			var artista = getArtist(id);

			return artista.albuns;
		},

		getAlbum: function(idAlbum, idArtist) {
			var artista = getArtist(idArtist);

			var artistaAlbuns = artista.albuns;

			var album;

			if(artista.albuns != null) {
				for(i = 0; i < artista.albuns.length; i ++) {
					if(artista.albuns[i].idAlbum == idAlbum) {
						album = albuns[i];
					}
				}
			}
			return album;
		},

		addAlbum: function(id, album) {

			var artista = getArtist(id);

			if(artista.albuns == null) {
				artista.albuns = [];
			}

			artista.albuns.push(album);
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

		addArtista: function(artista) {
			artista.id = ++id;
			artista.ultimaOuvida = "Não definido ainda";
			artista.statusCheck = true;
			artistasData.push(artista);
		},

		setArtistas: function(artistas) {
			artistasData = artistas;
		},

		resetArtistas: function() {
			artistasData = [];
		}

	};
});