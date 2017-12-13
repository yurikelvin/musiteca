angular.module("musiteca").controller("novoAlbumCtrl", function($uibModalInstance, $scope, usuariosAPI) {

	$scope.artistas = usuariosAPI.getArtistas();


	$scope.adicionarAlbum = function(nomeArtista, album) {

		if(!usuariosAPI.contemAlbum( nomeArtista, album.nome)) {
            usuariosAPI.adicionaAlbum( nomeArtista, album.nome, album.ano, album.imagem);
			$scope.cadastroEfetuado = true;
		} else {
			$scope.temAlbum = true;
		}

		delete $scope.album;
		delete $scope.artistaAlbum;
		$scope.albumForm.$setPristine();
	};

	$scope.temAlbum = false;
	$scope.cadastroEfetuado = false;

	$scope.hasAlbum = function() {

		if($scope.albumForm.nome.$valid && ($scope.temAlbum == true)) {
			$scope.temAlbum = false;
		}

		return $scope.temAlbum;

	};

	$scope.hasSuccess = function() {

		if($scope.albumForm.nome.$valid && ($scope.cadastroEfetuado == true)) {
			$scope.cadastroEfetuado = false;
		}

		return $scope.cadastroEfetuado;
	};

	$scope.close = function() {
		$uibModalInstance.dismiss('cancel');
	}


});
