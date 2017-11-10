angular.module("musiteca").factory("artistaAPI", function() {

	var albunsData = [];
	var musicasData = [];
	var id = 0;

	pegaAlbum = function(id) {

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

		getMusicas: function(idAlbum) {
			var album = pegaAlbum(idAlbum);

			return album.musicas;

		},

		getMusicas: function() {
			return musicasData;

		},

		addMusic: function(musica, idAlbum) {
			var album = pegaAlbum(idAlbum);

			musica.album = album;

			if(album.musicas == null) {
				album.musicas = [];
			}

			musicas.push(musica);
			album.musicas.push(musica);
		},

		addAlbum: function(album) {
			album.idAlbum = ++id;
			albunsData.push(album);
		},

		setAlbum: function(album) {
			albunsData = album;
		},

		resetAlbum: function() {
			albunsData = [];
		}

	};
});