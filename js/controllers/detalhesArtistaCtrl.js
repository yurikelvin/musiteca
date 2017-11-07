angular.module("musiteca").controller("detalhesArtistaCtrl", function($scope, $routeParams, artistasAPI, albunsAPI, $location) {

	$scope.artista = artistasAPI.getArtista($routeParams.id);
	$scope.albuns = albunsAPI.getAlbuns();

});