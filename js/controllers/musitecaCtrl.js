angular.module("musiteca").controller("musitecaCtrl",  function($scope, $uibModal, $timeout, usuariosAPI, artistas, albuns, musicas, favoritos, playlists) {

	$scope.artistas = artistas.data;
	$scope.artistasFavoritos = favoritos.data;
    $scope.albuns = albuns.data;
    $scope.musicas = musicas.data;
    $scope.playlists = playlists.data;

    $scope.$on('albuns:updated', function(event) {
        $scope.albuns = usuariosAPI.getAlbuns();
    });

    $scope.$on('artistas:updated', function(event) {
        $scope.artistas = usuariosAPI.getArtistas();
    });

    $scope.$on('artistaFavorito:updated', function(event) {
        $scope.artistasFavoritos = usuariosAPI.getArtistasFavoritos();
    });

    $scope.$on('musicas:updated', function(event) {
        $scope.musicas = usuariosAPI.getMusicas();
    });

    $scope.$on('playlists:updated', function(event) {
        $scope.playlists = usuariosAPI.getPlaylists();
    })



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
                usuariosAPI.adicionaFavoritos( $scope.artistas[k].nome);
            }
        }

        $scope.artistasFavoritos = usuariosAPI.getArtistasFavoritos();

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


    	usuariosAPI.setArtistasFavoritos( artistasAPermanecer);
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

        var playlistsAPermanecer = playlists.filter(function(playlist) {
            if(!playlist.selected) {
                return playlist;
            }
        });

        $scope.cleanSelectPlaylist(playlists);



        usuariosAPI.setPlaylists( playlistsAPermanecer);
        $scope.playlists = usuariosAPI.getPlaylists();
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
        };
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
