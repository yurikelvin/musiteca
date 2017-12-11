angular.module("musiteca").controller("mainCtrl", function($uibModal, $scope, usuariosAPI) {

    $scope.teste = usuariosAPI;

    $scope.logged = false;
    $scope.hasUser = false;

    $scope.$on('albuns:updated', function(event) {
        $scope.albuns = usuariosAPI.getAlbuns();
    });

    $scope.$on('musicas:updated', function(event) {
        $scope.musicas = usuariosAPI.getMusicas();
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



});
