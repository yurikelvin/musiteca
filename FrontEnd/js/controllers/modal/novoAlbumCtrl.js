angular.module("musiteca").controller("novoAlbumCtrl", function($rootScope, $uibModalInstance, $scope, usuariosAPI) {

	$scope.artistas = [];

	let carregaArtistas = function() {
		usuariosAPI.getArtistas()
			.then(function(response) {
				$scope.artistas = response.data;
			});
	};

    carregaArtistas();


	$scope.adicionarAlbum = function(nomeArtista, album) {
		album.artistaNome = nomeArtista;
        usuariosAPI.contemAlbum( album )
			.then(function(response) {
				usuariosAPI.saveAlbum(album)
					.then(function(response) {
                        $rootScope.$broadcast('albuns:updated');
					});
				$scope.cadastroEfetuado = true;
                delete $scope.album;
                delete $scope.artistaAlbum;
                $scope.albumForm.$setPristine();
			}, function(response) {
				$scope.temAlbum = true;
                delete $scope.album;
                delete $scope.artistaAlbum;
                $scope.albumForm.$setPristine();
			});
	};

	$scope.temAlbum = false;
	$scope.cadastroEfetuado = false;

	$scope.hasAlbum = function() {

		if($scope.albumForm.nome.$valid && ($scope.temAlbum === true)) {
			$scope.temAlbum = false;
		}

		return $scope.temAlbum;

	};

	$scope.hasSuccess = function() {

		if($scope.albumForm.nome.$valid && ($scope.cadastroEfetuado === true)) {
			$scope.cadastroEfetuado = false;
		}

		return $scope.cadastroEfetuado;
	};

	$scope.close = function() {
		$uibModalInstance.dismiss('cancel');
	}


});
