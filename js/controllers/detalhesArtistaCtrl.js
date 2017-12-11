angular.module("musiteca").controller("detalhesArtistaCtrl", function($uibModal, $uibModalInstance, $scope, item, usuariosAPI) {

	$scope.artista = item;
	$scope.albuns = usuariosAPI.getAlbuns( item.artistaNome);
	$scope.musicas = usuariosAPI.getMusicas( item.artistaNome);

	$scope.$watch("rate", function(newValue, oldValue) {
   		if ($scope.rate > 0) {
      		$scope.artista.rate = $scope.rate;
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
