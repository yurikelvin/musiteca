angular.module("musiteca").controller("detalhesArtistaCtrl", function($scope, item, artistasAPI) {

  console.log(item);
	$scope.artista = item;
	$scope.albuns = artistasAPI.getAlbuns(item.id);
	$scope.musicas = artistasAPI.getMusicas(item.id);

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