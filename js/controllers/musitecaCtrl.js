angular.module("musiteca").controller("musitecaCtrl", function($scope, $timeout, artistasAPI, artistasFavoritosAPI, $filter, $location) {

	$scope.app = "Musiteca!";

	$scope.artistas = artistasAPI.getArtistas();
	$scope.artistasFavoritos = artistasFavoritosAPI.getArtistasFavoritos();


    $scope.ordenarPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    $scope.star = {
		id: 4,
		name: 'light',
		icon: {
		  on: 'img/star.png',
		  off: 'img/starE.png'
		}
	};
  
	$scope.getIcon = function(data, isChecked){
    	if (data.icon) {
      		if (isChecked) return data.icon.on;
      	else return data.icon.off;
    	}
  	}

  	$scope.isArtistaSelecionado = function(artistas){
        return artistas.some(function(artista) {
            return artista.selecionado && artista.statusCheck;
        });


    };

     $scope.isArtistaFavoritoSelecionado = function(artistas){
        return artistas.some(function(artista) {
            return artista.select;
        });


    };


    $scope.adicionaFavoritos = function(artistas) {
        var artistasFavoritos = artistas.filter(function (artista) {
            if(artista.selecionado == true && artista.statusCheck == true) {
            	return artista;
            };
        });

        for(i = 0; i < artistasFavoritos.length; i ++) {
        	artistasFavoritos[i].statusCheck = false;
        }

        artistasFavoritosAPI.addArtistasFavoritos(artistasFavoritos);
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
    			artistas[i].statusCheck = true; // change to enable the check_box in artistas
    		} else {
    			artistasAPermanecer.push(artistas[i]);
    		}
    	}

        $scope.cleanSelect(artistas);


    	artistasFavoritosAPI.setArtistasFavoritos(artistasAPermanecer);
    	$scope.artistasFavoritos = artistasFavoritosAPI.getArtistasFavoritos();
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

});