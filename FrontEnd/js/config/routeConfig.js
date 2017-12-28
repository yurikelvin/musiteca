angular.module("musiteca").config(function ($routeProvider) {

    $routeProvider.when("/usuario",  {
        templateUrl: "view/usuarioLogado.html",
        controller: "musitecaCtrl",
        resolve: {
            artistas: function(usuariosAPI) {
                return usuariosAPI.getArtistas();
            },
            albuns: function(usuariosAPI) {
                return usuariosAPI.getAlbuns();
            },
            musicas: function(usuariosAPI) {
                return usuariosAPI.getMusicas();
            },
            favoritos: function(usuariosAPI) {
                return usuariosAPI.getFavoritos();
            },
            playlists: function(usuariosAPI) {
                return usuariosAPI.getPlaylists();
            }
        }
    });

	$routeProvider.otherwise({redirectTo: "/"});
});
