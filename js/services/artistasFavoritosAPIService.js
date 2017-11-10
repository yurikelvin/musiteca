angular.module("musiteca").factory("artistasFavoritosAPI", function() {

	var artistasFavoritosData = [];
	var id = 0;

	getArtistFavorito = function(id) {
		var artista = null;

		_id = parseInt(id);

		for(i = 0; i < artistasFavoritosData.length; i ++) {
			if(artistasFavoritosData[i] != null) {
				if(artistasFavoritosData[i].id == _id) {
					artista = artistasFavoritosData[i];
				}
			}
		}

		return artista;
	};

	return {

		getArtistasFavoritos: function() {
			return artistasFavoritosData;
		},

		getArtistaFavorito: function(id) {

			var artista = getArtistFavorito(id);

			return artista;
		},

		getAlbunsF: function(id) {
			var artista = getArtistFavorito(id);

			return artista.albuns;
		},

		addAlbumFavorito: function(id, album) {

			var artista = getArtistFavorito(id);

			if(artista.albuns == null) {
				artista.albuns = [];
			}

			artista.albuns.push(album);
		},

		addArtistaFavorito: function(artista) {
			artista.id = ++id;
			artistasFavoritosData.push(artista);
		},

		setArtistasFavoritos: function(artistas) {
			artistasFavoritosData = artistas;
		},

		resetArtistasFavoritos: function() {
			artistasFavoritosData = [];
		}

	};
});