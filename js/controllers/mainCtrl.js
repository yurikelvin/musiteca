angular.module("musiteca").controller("mainCtrl", function($http, $location, $uibModal, $scope, usuariosAPI) {

    $scope.teste = usuariosAPI;

    $scope.logged = false;
    $scope.hasUser = false;

    $scope.logout = function() {
        usuariosAPI.updateUser();
        localStorage.setItem("login", "");
        localStorage.setItem("userToken", "");
        $location.path("/");
    };


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
