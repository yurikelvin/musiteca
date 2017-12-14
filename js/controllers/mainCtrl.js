angular.module("musiteca").controller("mainCtrl", function($uibModal, $scope, usuariosAPI) {

    $scope.teste = usuariosAPI;

    $scope.logged = false;
    $scope.hasUser = false;

    var carregaDados = function() {
        let login = localStorage.getItem("login");
        let token = localStorage.getItem("userToken")
        usuariosAPI.carregaUsuario(login, token);
    }

    $scope.$on('artistas:updated', function(event) {
       usuariosAPI.updateUser();
    })

    $scope.$on('albuns:updated', function(event) {
        usuariosAPI.updateUser();
    });

    $scope.$on('musicas:updated', function(event) {
        usuariosAPI.updateUser();
    });

    $scope.$on('playlists:updated', function(event) {
        usuariosAPI.updateUser();
    });

    $scope.$on('musicasPlaylist', function(event) {
        usuariosAPI.updateUser();
    });

    $scope.$on('artistaFavorito:updated', function(event) {
        usuariosAPI.updateUser();
    });

    $scope.openModal = function(template) {
        let modalInstance = $uibModal.open({
            templateUrl: 'view/modal/' + template + '.html',
            controller: template + 'Ctrl'
        });
    };

    $scope.ordenarPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };


    carregaDados();
});
