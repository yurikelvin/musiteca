angular.module("musiteca").controller("mainCtrl", function($rootScope, $location, $uibModal, $scope, usuariosAPI) {

    $scope.teste = usuariosAPI;

    $scope.logged = false;

    $scope.$on('login:updated', function(event) {
        let email = localStorage.getItem("email");
        if(email != null && email !== "") {
            $scope.logged = true;
        }
    });

    $scope.logout = function() {
        localStorage.clear();
        $scope.logado = false;
        usuariosAPI.resetUser();
        $scope.logged = false;
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
