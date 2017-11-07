angular.module("musiteca").config(function ($routeProvider) {

	/** Rotas pertinentes ao menu**/
	$routeProvider.when("/menu", {
		templateUrl: "view/menu.html",
		controller: "musitecaCtrl"
	});

	$routeProvider.when("/playlist",  {
		templateUrl: "view/playlist.html",
		controller: "musitecaCtrl"
	});

	$routeProvider.when("/artistas",  {
		templateUrl: "view/artistas.html",
		controller: "musitecaCtrl"
	});

	/** Rotas pertinentes a artista**/

	$routeProvider.when("/artistas/detalhes/:id", {
		templateUrl: "view/detalhesArtista.html",
		controller: "detalhesArtistaCtrl",
	});

	/** Rotas pertinentes a adições de informações no sistema **/

	$routeProvider.when("/addInfo", {
		templateUrl: "view/adicionaInformacoes.html",
		controller: "musitecaCtrl"
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