angular.module("musiteca").controller("mainCtrl", function($uibModal, $scope, usuariosAPI) {

    usuariosAPI.adicionaUsuario("tsubakker", "teste123", "Yuri");

    $scope.teste = usuariosAPI;

    $scope.artistas = usuariosAPI.getArtistas("tsubakker");
    $scope.albuns = usuariosAPI.getAlbuns("tsubakker");
    $scope.musicas = usuariosAPI.getMusicas("tsubakker");

    $scope.$on('albuns:updated', function(event) {
        $scope.albuns = usuariosAPI.getAlbuns("tsubakker");
    });

    $scope.$on('musicas:updated', function(event) {
        $scope.musicas = usuariosAPI.getMusicas("tsubakker");
    });

    $scope.openModal = function(template) {
        var modalInstance = $uibModal.open({
            templateUrl: 'view/modal/' + template + '.html',
            controller: template + 'Ctrl'
        });
    };

    $scope.ordenarPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };



});
