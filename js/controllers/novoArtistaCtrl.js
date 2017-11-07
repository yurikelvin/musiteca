angular.module("musiteca").controller("novoArtistaCtrl", function($scope, artistasAPI) {

	$scope.artistas = artistasAPI.getArtistas();


	$scope.adicionarArtista = function(artista) {

		if(!$scope.verificaArtista($scope.artistas, artista)) {
			artistasAPI.addArtista(angular.copy(artista));
			$scope.cadastroEfetuado = true;
		} else {
			$scope.temArtista = true;
		}

		delete $scope.artista;
		$scope.artistaForm.$setPristine();
	};

	$scope.temArtista = false;
	$scope.cadastroEfetuado = false;

	$scope.verificaArtista = function (artistas, artista) {
		var resposta = false;

		for(i = 0; i < artistas.length; i ++) {
			if(artistas[i].nome.toLowerCase() == artista.nome.toLowerCase()) {
				resposta = true;
			}
		}


		return resposta;
	};

	$scope.hasArtista = function() {

		if($scope.artistaForm.nome.$valid && ($scope.temArtista == true)) {
			$scope.temArtista = false;
		}

		return $scope.temArtista;

	};

	$scope.hasSuccess = function() {

		if($scope.artistaForm.nome.$valid && ($scope.cadastroEfetuado == true)) {
			$scope.cadastroEfetuado = false;
		}

		return $scope.cadastroEfetuado;
	};


});