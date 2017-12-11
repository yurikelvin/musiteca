angular.module("musiteca").controller("novaMusicaCtrl", function($uibModalInstance, $scope, usuariosAPI) {

	$scope.artistas = usuariosAPI.getArtistas();

	$scope.albuns = usuariosAPI.getAlbuns();

	$scope.temMusic = false;
	$scope.cadastroEfetuado = false;


	$scope.adicionarMusica = function(musica, nomeAlbum, nomeArtist) {

		if(!usuariosAPI.contemMusica( nomeArtist, nomeAlbum, musica.nome)) {
            usuariosAPI.adicionaMusica( nomeArtist, nomeAlbum, musica.nome, musica.duracao, musica.ano);
			$scope.cadastroEfetuado = true;
		} else {
			$scope.temMusic = true;
		}

		delete $scope.musica;
		delete $scope.selectedArtist;
		delete $scope.selectedAlbum;
		$scope.musicForm.$setPristine();

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
