angular.module("musiteca").controller("novaMusicaCtrl", function($uibModalInstance, $scope, artistasAPI, albunsAPI, $filter, $location) {

	$scope.artistas = artistasAPI.getArtistas();

	$scope.albuns = artistasAPI.getAlbuns();

	$scope.temMusic = false;
	$scope.cadastroEfetuado = false;


	$scope.adicionarMusica = function(musica, idAlbum, idArtist) {

		if(!$scope.contemMusicaRepetida(musica,idAlbum)) {
			artistasAPI.addMusic(musica, idAlbum);
			$scope.cadastroEfetuado = true;
		} else {
			$scope.temMusic = true;
		}

		delete $scope.musica;
		delete $scope.selectedArtist;
		delete $scope.selectedAlbum;
		$scope.musicForm.$setPristine();

	};

	$scope.contemMusicaRepetida = function(musica, idAlbum) {
		
		return artistasAPI.hasMusic(musica, idAlbum);

	};

	$scope.hasMusic = function() {

		if($scope.musicForm.nome.$valid && ($scope.temMusic == true)) {
			$scope.temMusic = false;
		}

		return $scope.temMusic;

	};

	$scope.hasSuccess = function() {

		if(($scope.musicForm.nome.$valid || $scope.musicForm.duracao.$valid) && ($scope.cadastroEfetuado == true)) {
			$scope.cadastroEfetuado = false;
		}

		return $scope.cadastroEfetuado;
	};

	$scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    }


});