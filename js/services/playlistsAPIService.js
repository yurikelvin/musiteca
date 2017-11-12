angular.module("musiteca").factory("playlistsAPI", function() {

	var playlistsData = [];
	var idPlaylist = 0;

	getPlaylist = function(idPlaylist) {
		var playlist = null;

		var id = parseInt(idPlaylist);

		for(i = 0; i < playlistsData.length; i ++) {
			if(playlistsData[i].idPlaylist == id) {
				playlist = playlistsData[i];
			}
		}

		return playlist;

	};

	return {


		addPlaylist: function(playlist) {

			if(playlist.musicas == null) {
				playlist.musicas = [];
			}

			playlist.data = new Date();
			playlist.idPlaylist = ++ idPlaylist;

			playlistsData.push(playlist);
		},

		addMusicas: function(idPlaylist, musicas) {
			var playlist = getPlaylist(idPlaylist);

			for(i = 0; i < musicas.length; i ++) {
				playlist.musicas.push(musicas[i]);
			}
		},

		getMusicasPlaylist: function(idPlaylist) {
			var playlist = getPlaylist(idPlaylist);

			return playlist.musicas;
		},

		getPlaylists: function() {
			return playlistsData;
		},

		getPlaylist: function(idPlaylist) {
			var playlist = getPlaylist(idPlaylist);

			return playlist;
		},

		contemPlaylist: function(nomePlaylist) {
			var resposta = false;

			for(i = 0; i < playlistsData.length; i ++) {
				if(playlistsData[i].nome.toLowerCase() == nomePlaylist.toLowerCase()) {
					resposta = true;
				}
			}

			return resposta;

		},

		setMusicasToPlaylist: function(idPlaylist, musicas) {
			var playlist = getPlaylist(idPlaylist);

			playlist.musicas = musicas;
		},

		setPlaylists: function(playlists) {
			playlistsData = playlists;
		}



	};





 });