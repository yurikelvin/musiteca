angular.module("musiteca").controller("novoArtistaCtrl", function($uibModalInstance, $scope, usuariosAPI) {


	$scope.adicionarArtista = function(artista) {
		usuariosAPI.contemArtista(artista)
			.then(function(response){
				usuariosAPI.saveArtista(artista).then(function(response) {
                    $scope.cadastroEfetuado = true;
					delete $scope.artista;
                    $scope.artistaForm.$setPristine();
				});
			}, function(response) {
                $scope.temArtista = true;
                delete $scope.artista;
                $scope.artistaForm.$setPristine();
			});
	};

	$scope.temArtista = false;
	$scope.cadastroEfetuado = false;

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

	$scope.close = function() {
		$uibModalInstance.dismiss('cancel');
	}

});
