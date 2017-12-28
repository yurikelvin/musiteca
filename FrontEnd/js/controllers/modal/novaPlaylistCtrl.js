angular.module("musiteca").controller("novaPlaylistCtrl", function($rootScope, $uibModalInstance, $scope, $timeout, usuariosAPI) {

	$scope.musicas = [];

	let carregaMusicas = function() {
	    usuariosAPI.getMusicas()
            .then(function(response) {
                $scope.musicas = response.data;
            });
    };

	carregaMusicas();

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

        playlist.data = new Date();
        usuariosAPI.contemPlaylist(playlist)
            .then(function(response) {
                let musicasSelecionadas = [];

                if($scope.musicas.length > 0) {
                    musicasSelecionadas = $scope.musicas.filter(function (musica) {
                        if (musica.selectPlaylist) {
                            return musica;
                        }
                    })
                }
                playlist.musicas = musicasSelecionadas;
                usuariosAPI.savePlaylist(playlist)
                    .then(function(response) {
                        $rootScope.$broadcast('playlist:updated');
                    });
                $scope.playlistAdicionada = true;
                delete $scope.playlist;
                $scope.playlistForm.$setPristine();
                $scope.limpaSelectNewPlaylist();
            }, function(response) {
                $scope.temPlaylist = true;
                delete $scope.playlist;
                $scope.playlistForm.$setPristine();
                $scope.limpaSelectNewPlaylist();
            });

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
