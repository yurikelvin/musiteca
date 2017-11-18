angular.module("musiteca").config(function ($routeProvider) {

	/** Rotas pertinentes ao usuario**/
	$routeProvider.when("/artistasFavoritos",  {
		templateUrl: "view/artistasFavoritos.html",
		controller: "musitecaCtrl"
	});

	$routeProvider.when("/playlist",  {
		templateUrl: "view/playlist.html",
		controller: "playlistsCtrl"
	});

	$routeProvider.when("/playlist/:idPlaylist", {
		templateUrl: "view/detalhesPlaylist.html",
		controller: "detalhesPlaylistCtrl",
	});

	$routeProvider.when("/novaPlaylist",  {
		templateUrl: "view/novaPlaylist.html",
		controller: "playlistsCtrl"
	});

	/** Rotas pertinentes a artista do sistema**/

	$routeProvider.when("/artistas",  {
		templateUrl: "view/artistas.html",
		controller: "musitecaCtrl"
	});

	$routeProvider.when("/album/detalhes/:id", {
		templateUrl: "view/detalhesAlbum.html",
		controller: "detalhesAlbumCtrl",
	});

	$routeProvider.otherwise({redirectTo: "/"});
});