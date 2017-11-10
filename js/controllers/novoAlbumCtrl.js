angular.module("musiteca").controller("novoAlbumCtrl", function($scope, artistasAPI, albunsAPI) {

	$scope.artistas = artistasAPI.getArtistas();
	$scope.albuns = albunsAPI.getAlbuns();


	$scope.adicionarAlbum = function(id, album) {

		if(!$scope.verificaAlbum($scope.albuns, album)) {

			var artistaRelacionado = artistasAPI.getArtista(id);
			album.artistaNome = artistaRelacionado.nome;
			var copyAlbum = angular.copy(album);

			artistasAPI.addAlbum(id, copyAlbum);
			albunsAPI.addAlbum(id, copyAlbum);

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

	$scope.verificaAlbum = function (albuns, album) {
		var resposta = false;

		for(i = 0; i < albuns.length; i ++) {
			if(albuns[i].nome.toLowerCase() == album.nome.toLowerCase()) {
				resposta = true;
			}
		}


		return resposta;
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


});