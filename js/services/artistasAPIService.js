angular.module("musiteca").factory("artistasAPI", function() {

	var artistasData = [];
	var id = 0;

	getArtist = function(id) {
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

		addAlbum: function(id, album) {

			var artista = getArtist(id);

			if(artista.albuns == null) {
				artista.albuns = [];
			}

			artista.albuns.push(album);
		},

		addArtista: function(artista) {
			artista.id = ++id;
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