angular.module("musiteca").controller("novoAlbumCtrl", function($uibModalInstance, $scope, artistasAPI) {

	$scope.artistas = artistasAPI.getArtistas();
	$scope.albuns = artistasAPI.getAlbuns();


	$scope.adicionarAlbum = function(id, album) {

		if(!$scope.verificaAlbum(album)) {

			artistasAPI.addAlbum(id, angular.copy(album));

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

	$scope.verificaAlbum = function (album) {
		return artistasAPI.hasAlbum(album);
	};

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