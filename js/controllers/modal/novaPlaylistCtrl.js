angular.module("musiteca").controller("novaPlaylistCtrl", function($uibModalInstance, $scope, $timeout, usuariosAPI) {

	$scope.musicas = usuariosAPI.getMusicas();
    $scope.playlists = usuariosAPI.getPlaylists();

    $scope.playlistAdicionada = false;
    $scope.temPlaylist = false;

    $scope.ordenarPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    $scope.limpaSelectNewPlaylist = function() {
        if($scope.musicas.length > 0) {
            for(i = 0; i < $scope.musicas.length; i ++) {
                if($scope.musicas[i].selectPlaylist != null && ($scope.musicas[i].selectPlaylist === true)) {
                    $scope.musicas[i].selectPlaylist = false;
                }
            }
        }
    };



    $scope.adicionaPlaylist = function(playlist) {

        if(!usuariosAPI.contemPlaylist(playlist.nome)) {

            let musicasSelecionadas = [];

            usuariosAPI.adicionaPlaylist( playlist.nome, playlist.imagem, playlist.descricao);
            if($scope.musicas.length > 0) {
                musicasSelecionadas = $scope.musicas.filter(function (musica) {
                    if(musica.selectPlaylist) {
                        return musica;
                    }
                });

                usuariosAPI.adicionaPlaylist( playlist.nome, musicasSelecionadas);
            }

            $scope.playlistAdicionada = true;
        } else {
            $scope.temPlaylist = true;
        }

        delete $scope.playlist;
        $scope.playlistForm.$setPristine();
        $scope.limpaSelectNewPlaylist();
    };

    $scope.check = {
        id: 4,
        name: 'light',
        icon: {
          on: 'img/check.png',
          off: 'img/unchecked.png'
        }
    };

    $scope.getIcon = function(data, isChecked){
        if (data.icon) {
            if (isChecked) return data.icon.on;
        else return data.icon.off;
        }
    };

    $scope.hasPlaylist = function() {

        if($scope.playlistForm.nome.$valid && ($scope.temPlaylist === true)) {
            $scope.temPlaylist = false;
        }

        return $scope.temPlaylist;

    };

    $scope.hasSuccess = function() {

        if($scope.playlistForm.nome.$valid && ($scope.playlistAdicionada === true)) {
            $scope.playlistAdicionada = false;
        }

        return $scope.playlistAdicionada;
    };

    $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    }


});
