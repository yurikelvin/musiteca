angular.module("musiteca").controller("novaMusicaCtrl", function($rootScope, $uibModalInstance, $scope, usuariosAPI) {

	$scope.artistas = [];
    $scope.albuns = [];

	let carregaArtistas = function() {
		usuariosAPI.getArtistas()
			.then(function(response) {
				$scope.artistas = response.data;
			});
    };

	let carregaAlbuns = function() {
        usuariosAPI.getAlbuns()
			.then(function(response) {
				$scope.albuns = response.data;
			})
	};

	carregaArtistas();
	carregaAlbuns();


	$scope.temMusic = false;
	$scope.cadastroEfetuado = false;


	$scope.adicionarMusica = function(musica, album, artista) {
		musica.albumNome = album.nome;
		musica.nomeArtist = artista.nome;

		usuariosAPI.contemMusica(musica)
			.then(function(response) {
				usuariosAPI.saveMusica(musica)
					.then(function(response){
                        $rootScope.$broadcast('musicas:updated');
					});
                $scope.cadastroEfetuado = true;
                delete $scope.musica;
                delete $scope.selectedArtist;
                delete $scope.selectedAlbum;
                $scope.musicForm.$setPristine();

			}, function(response) {
                $scope.temMusic = true;
                delete $scope.musica;
                delete $scope.selectedArtist;
                delete $scope.selectedAlbum;
                $scope.musicForm.$setPristine();
			});
	};
    
	$scope.hasMusic = function() {

		if($scope.musicForm.nome.$valid && ($scope.temMusic === true)) {
			$scope.temMusic = false;
		}

		return $scope.temMusic;

	};

	$scope.hasSuccess = function() {

		if(($scope.musicForm.nome.$valid || $scope.musicForm.duracao.$valid) && ($scope.cadastroEfetuado === true)) {
			$scope.cadastroEfetuado = false;
		}

		return $scope.cadastroEfetuado;
	};

	$scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    }


});
