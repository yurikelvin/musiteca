angular.module("musiteca").controller("detalhesArtistaCtrl", function($scope, $routeParams, artistasAPI, albunsAPI) {

	$scope.artista = artistasAPI.getArtista($routeParams.id);
	$scope.albuns = artistasAPI.getAlbuns($routeParams.id);
	$scope.musicas = artistasAPI.getMusicas($routeParams.id);

	$scope.$watch("rate", function(newValue, oldValue) {
   		if ($scope.rate > 0) {
      		$scope.artista.rate = $scope.rate;
    	}
  	});

  	if($scope.artista.rate != null) {
  		$scope.rate = $scope.artista.rate;
  	}

  	$scope.ordenarPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };


    $scope.defineUltimaOuvida = function(ultimaOuvida) {
    	$scope.artista.ultimaOuvida = ultimaOuvida.nome;
    };


});