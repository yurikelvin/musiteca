angular.module("musiteca").controller("mainCtrl", function($scope, artistasAPI, albunsAPI) {

	$scope.artistas = artistasAPI.getArtistas();
	$scope.albuns = albunsAPI.getAlbuns();
	$scope.musicas = albunsAPI.getMusicas();

});