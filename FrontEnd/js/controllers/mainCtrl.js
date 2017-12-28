angular.module("musiteca").controller("mainCtrl", function($rootScope, $location, $uibModal, $scope, usuariosAPI) {

    $scope.teste = usuariosAPI;

    $scope.logged = false;

    let loginLoad = function() {
        let email = localStorage.getItem("email");
        if(email != null && email !== "") {
            $scope.logged = true;
        }
    };

    $scope.$on('login:updated', function(event) {
        loginLoad();
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

    loginLoad();

});
