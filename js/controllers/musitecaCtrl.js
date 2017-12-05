angular.module("musiteca").controller("musitecaCtrl",  function($scope, $uibModal, $timeout, usuariosAPI, $filter) {

	$scope.artistas = usuariosAPI.getArtistas("tsubakker");
	$scope.artistasFavoritos = usuariosAPI.getArtistasFavoritos("tsubakker");
    $scope.albuns = usuariosAPI.getAlbuns("tsubakker");

    $scope.$on('albuns:updated', function(event) {
        $scope.albuns = usuariosAPI.getAlbuns("tsubakker");
    });

    $scope.$on('artistas:updated', function(event) {
        $scope.artistas = usuariosAPI.getArtistas("tsubakker");
    });

    $scope.$on('artistaFavorito:updated', function(event) {
        $scope.artistasFavoritos = usuariosAPI.getArtistasFavoritos("tsubakker");
    });



    $scope.ordenarPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

  	$scope.isArtistaSelecionado = function(artistas){
        return artistas.some(function(artista) {
            return artista.selecionado && !artista.favorito;
        });


    };

     $scope.isArtistaFavoritoSelecionado = function(artistas){
        return artistas.some(function(artista) {
            return artista.select;
        });


    };


    $scope.adicionaFavoritos = function() {

        for(k = 0; k < $scope.artistas.length; k ++) {
            if($scope.artistas[k].selecionado == true && $scope.artistas[k].favorito == false) {
                usuariosAPI.adicionaFavoritos("tsubakker", $scope.artistas[k].nome);
            }
        }

        $scope.artistasFavoritos = usuariosAPI.getArtistasFavoritos("tsubakker");

        $scope.hasSucessFavoritos = true;
        $timeout(function(){
        	$scope.hasSucessFavoritos = false;
    	}, 3000);
    };

    $scope.removeArtistasFavoritos = function(artistas) {
    	var artistasAPermanecer = [];

    	for(i = 0; i < artistas.length; i ++) {
    		if(artistas[i].select) {
    			artistas[i].selecionado = false; // change the icon on check_box in artistas
    			artistas[i].favorito = false; // change to enable the check_box in artistas
    		} else {
    			artistasAPermanecer.push(artistas[i]);
    		}
    	}

        $scope.cleanSelect(artistas);


    	usuariosAPI.setArtistasFavoritos(artistasAPermanecer);
    	$scope.artistasFavoritos = usuariosAPI.getArtistasFavoritos();
    };

    $scope.hasSucessFavoritos = false;

    $scope.check = {
		id: 4,
		name: 'light',
		icon: {
		  on: 'img/check.png',
		  off: 'img/unchecked.png'
		}
	};

    $scope.confirmRemoveFavoritos = function(artistas) {

        swal({
          title: "Você tem certeza?",
          text: "Você tem certeza que deseja remover o(s) artista(s) dos favoritos?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            $scope.$apply (function () {
                $scope.removeArtistasFavoritos(artistas);
            });
            swal("Artista(s) removido(s) com sucesso.", {icon: "success",});
          } else {

            $scope.$apply(function() {
                $scope.cleanSelect(artistas);
            });
          }
        });

    };


    $scope.cleanSelect = function(artistas) {
        for(i = 0; i < artistas.length; i ++) {
            artistas[i].select = false;
        }
    };

    $scope.view = function (itemSelected, template) {
      var modalInstance = $uibModal.open({
        templateUrl: 'view/modal/' + template + '.html',
        controller: template + 'Ctrl',
        size: 'lg',
        resolve: {
          item: function () {
            return itemSelected;
          }
        }
      });
    };

});
