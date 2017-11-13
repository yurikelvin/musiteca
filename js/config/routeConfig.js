angular.module("musiteca").config(function ($routeProvider) {

	/** Rotas pertinentes ao menu**/
	$routeProvider.when("/menu", {
		templateUrl: "view/menu.html"
	});

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

	$routeProvider.when("/artistas/detalhes/:id", {
		templateUrl: "view/detalhesArtista.html",
		controller: "detalhesArtistaCtrl",
	});

	$routeProvider.when("/album/detalhes/:id", {
		templateUrl: "view/detalhesAlbum.html",
		controller: "detalhesAlbumCtrl",
	});

	/** Rotas pertinentes a adições de informações no sistema **/

	$routeProvider.when("/addInfo", {
		templateUrl: "view/adicionaInformacoes.html",
	});

	$routeProvider.when("/addInfo/novoArtista",  {
		templateUrl: "view/novoArtista.html",
		controller: "novoArtistaCtrl"
	});

	$routeProvider.when("/addInfo/novoAlbum",  {
		templateUrl: "view/novoAlbum.html",
		controller: "novoAlbumCtrl"
	});

	$routeProvider.when("/addInfo/addMusica", {
		templateUrl: "view/adicionaMusica.html",
		controller: "adicionaMusicaCtrl"
	});

	$routeProvider.otherwise({redirectTo: "/menu"});
});