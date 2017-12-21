angular.module("musiteca").controller("detalhesArtistaCtrl", function($uibModal, $uibModalInstance, $scope, item, usuariosAPI) {

	$scope.artista = item;
	$scope.albuns = [];
	$scope.musicas = [];

	let carregaAlbuns = function() {
        usuariosAPI.getAlbunsArtista(item.nome)
            .then(function(response) {
                $scope.albuns = response.data;
            })
    };

	let carregaMusicas = function() {
        usuariosAPI.getMusicasArtista(item.nome)
            .then(function(response) {
                $scope.musicas = response.data;
            })
    };

	carregaAlbuns();
	carregaMusicas();

	$scope.$watch("rate", function(newValue, oldValue) {
   		if ($scope.rate > 0) {
      		$scope.artista.rate = $scope.rate;
      		usuariosAPI.saveArtista($scope.artista);
    	}
  	});

  	if($scope.artista.rate != null) {
  		$scope.rate = $scope.artista.rate;
  	}

  	$scope.ordenarPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };


    $scope.defineUltimaOuvida = function(ultimaOuvida) {
    	$scope.artista.ultimaOuvida = ultimaOuvida.nome;
    	usuariosAPI.saveArtista($scope.artista);
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    $scope.viewAlbum = function (itemSelected) {
      $scope.cancel();
      var modalInstance = $uibModal.open({
        templateUrl: 'view/modal/detalhesAlbum.html',
        controller: 'detalhesAlbumCtrl',
        size: 'lg',
        resolve: {
          item: function () {
            return itemSelected;
          }
        }
      });
    };


});
