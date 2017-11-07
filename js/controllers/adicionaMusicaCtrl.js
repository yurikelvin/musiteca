angular.module("musiteca").controller("adicionaMusicaCtrl", function($scope, artistasAPI, albunsAPI, $filter, $location) {

	$scope.artistas = artistasAPI.getArtistas();

	$scope.albuns = albunsAPI.getAlbuns();

	$scope.temMusic = false;
	$scope.cadastroEfetuado = false;


	$scope.adicionarMusica = function(musica, idAlbum, idArtist) {
		var contemMusicaRepetida = $scope.contemMusicaRepetida(musica, idAlbum);

		if(!contemMusicaRepetida) {
			albunsAPI.addMusic(musica, idAlbum);
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
		var musicas = albunsAPI.getMusicas(idAlbum);

		var contem = false;

		if(musicas != null) {

			for(i = 0; i < musicas.length; i ++) {
				if(musicas[i].nome.toLowerCase() == musica.nome.toLowerCase()) {
					contem = true;
				}
			}
		}

		return contem;


	}

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

});