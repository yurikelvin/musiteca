angular.module("musiteca").controller("novaPlaylistCtrl", function($uibModalInstance, $scope, $timeout, albunsAPI, playlistsAPI, $filter, $location) {

	$scope.musicas = albunsAPI.getMusicas();
    $scope.playlists = playlistsAPI.getPlaylists();


    $scope.playlistAdicionada = false;
    $scope.temPlaylist = false;

    $scope.ordenarPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    $scope.limpaSelectNewPlaylist = function() {
        if($scope.musicas.length > 0) {
            for(i = 0; i < $scope.musicas.length; i ++) {
                if($scope.musicas[i].selectPlaylist != null && ($scope.musicas[i].selectPlaylist == true)) {
                    $scope.musicas[i].selectPlaylist = false;
                }
            }
        }
    };



    $scope.adicionaPlaylist = function(playlist) {

        if(!playlistsAPI.contemPlaylist(playlist.nome)) {

            var musicasSelecionadas = [];


            if($scope.musicas.length > 0) {
                musicasSelecionadas = $scope.musicas.filter(function (musica) {
                    if(musica.selectPlaylist) {
                        return musica;
                    };
                });

                playlist.musicas = musicasSelecionadas;
            };

            playlistsAPI.addPlaylist(playlist);
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
    }

    $scope.hasPlaylist = function() {

        if($scope.playlistForm.nome.$valid && ($scope.templaylist == true)) {
            $scope.temPlaylist = false;
        }

        return $scope.temPlaylist;

    };

    $scope.hasSuccess = function() {

        if($scope.playlistForm.nome.$valid && ($scope.playlistAdicionada == true)) {
            $scope.playlistAdicionada = false;
        }

        return $scope.playlistAdicionada;
    };

    $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    }


});
