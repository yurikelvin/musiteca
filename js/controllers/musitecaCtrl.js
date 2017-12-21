angular.module("musiteca").controller("musitecaCtrl",  function($scope, $uibModal, $timeout, usuariosAPI, artistas, albuns, musicas, favoritos, playlists) {

	$scope.artistas = artistas.data;
	$scope.artistasFavoritos = favoritos.data;
    $scope.albuns = albuns.data;
    $scope.musicas = musicas.data;
    $scope.playlists = playlists.data;

    $scope.$on('albuns:updated', function(event) {
        usuariosAPI.getAlbuns()
            .then(function(response) {
                $scope.albuns = response.data;
            });
    });

    let carregaArtistas = function() {
        usuariosAPI.getArtistas()
            .then(function(response) {
                $scope.artistas = response.data;
            });
    };

    $scope.$on('artistas:updated', function(event) {
        carregaArtistas();
    });

    $scope.$on('musicas:updated', function(event) {
        usuariosAPI.getMusicas()
            .then(function(response) {
                $scope.musicas = response.data;
            });
    });

    let carregaPlaylist = function() {
        usuariosAPI.getPlaylists()
            .then(function(response) {
                $scope.playlists = response.data;
            });
    };

    $scope.$on('playlist:updated', function(event) {
        carregaPlaylist();
    });


    let carregaFavoritos = function() {
        usuariosAPI.getFavoritos()
            .then(function(response) {
                $scope.artistasFavoritos = response.data;
            });
    };



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
            if($scope.artistas[k].selecionado === true && $scope.artistas[k].favorito === false) {
                usuariosAPI.saveFavorito( $scope.artistas[k] )
                    .then(function(response) {
                        carregaArtistas();
                        carregaFavoritos();
                    });
            }
        }

        $scope.hasSucessFavoritos = true;
        $timeout(function(){
        	$scope.hasSucessFavoritos = false;
    	}, 3000);
    };

    $scope.removeArtistasFavoritos = function(artistas) {

    	for(i = 0; i < artistas.length; i ++) {
    		if(artistas[i].select) {
    			artistas[i].selecionado = false; // change the icon on check_box in artistas
    			artistas[i].favorito = false; // change to enable the check_box in artistas
                usuariosAPI.deleteFavorito(artistas[i].nome)
                    .then(function(response) {
                        carregaArtistas();
                        carregaFavoritos();
                    });
    		}
    	}

        $scope.cleanSelect(artistas);

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
      let modalInstance = $uibModal.open({
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

    $scope.removePlaylist = function(playlists) {

        for(let i = 0; i < playlists.length; i ++) {
            if(playlists[i].selected) {
                usuariosAPI.deletePlaylist(playlists[i].nome)
                    .then(function(response) {
                        carregaPlaylist();
                    });
            }
        }

        $scope.cleanSelectPlaylist(playlists);
    };

    $scope.confirmRemovePlaylist = function(playlists) {

        swal({
            title: "Você tem certeza?",
            text: "Você tem certeza que deseja remover a(s) playlist(s) cadastradas?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    $scope.$apply (function () {
                        $scope.removePlaylist(playlists);
                    });
                    swal("Playlist(s) removida(s) com sucesso.", {icon: "success",});
                } else {

                    $scope.$apply(function() {
                        $scope.cleanSelect(playlists);
                    });
                }
            });
    };

    $scope.cleanSelectPlaylist = function(playlists) {
        for(i = 0 ; i < playlists.length; i ++) {
            playlists[i].selected = false;
        }
    };

    $scope.isPlaylistSelecionado = function(playlists){
        return playlists.some(function(playlist) {
            return playlist.selected;
        });


    };

    $scope.showBuscar = function() {
        $scope.buscarPlaylist = !$scope.buscarPlaylist;
    };

    $scope.buscarPlaylist = false;

});
