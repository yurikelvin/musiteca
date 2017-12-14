angular.module("musiteca").controller("mainCtrl", function($interval, $uibModal, $scope, usuariosAPI) {

    $scope.teste = usuariosAPI;

    $scope.logged = false;
    $scope.hasUser = false;

    var interval;

    var autoSave = function() {
        interval = $interval(function() {
            usuariosAPI.updateUser();
        }, 30000, 0);
    }

    var carregaDados = function() {
        let login = localStorage.getItem("login");
        if(login != "null" && login != "") {
            let token = localStorage.getItem("userToken")
            usuariosAPI.carregaUsuario(login, token);
             autoSave();
        } else {
            $interval.cancel(interval);
        }
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


    carregaDados();

});
