angular.module("musiteca").controller("playlistsCtrl", function($uibModal, $scope, $timeout, usuariosAPI, $filter, $location) {

	$scope.musicas = usuariosAPI.getMusicas();
    $scope.playlists = usuariosAPI.getPlaylists();

    $scope.$on('musicas:updated', function(event) {
        $scope.musicas = usuariosAPI.getMusicas();
    });

    $scope.ordenarPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    $scope.removePlaylist = function(playlists) {

    	var playlistsAPermanecer = playlists.filter(function(playlist) {
            if(!playlist.selected) {
                return playlist;
            }
        });

        $scope.cleanSelect(playlists);



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

    $scope.cleanSelect = function(playlists) {
        for(i = 0 ; i < playlists.length; i ++) {
            playlists[i].selected = false;
        };
    };

    $scope.isPlaylistSelecionado = function(playlists){
        return playlists.some(function(playlist) {
            return playlist.selected;
        });


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

    $scope.showBuscar = function() {
        if($scope.buscarPlaylist) {
            $scope.buscarPlaylist = false;
        } else {
            $scope.buscarPlaylist = true;
        }

    };

    $scope.buscarPlaylist = false;
});
