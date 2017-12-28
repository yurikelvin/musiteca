angular.module("musiteca").controller("loginCtrl", function($rootScope, $uibModal, $uibModalInstance, $scope, $location, usuariosAPI, $http) {


    $scope.typePassword = "password";
    $scope.iconPassword = "fa fa-lg fa-eye-slash text-primary mb-3 sr-icons";
    $scope.registrar = false;
    $scope.temUsuario = false;
    $scope.invalido = false;
    $scope.errado = false;
    $scope.logado = false;

    $scope.logar = function(usuario) {

        $http.post("http://localhost:8080/autenticar", angular.copy(usuario), {headers: {
                'Content-Type': 'application/json'
            }}).then(function(response) {
           localStorage.setItem("userToken", response.data.token);
            localStorage.setItem("email", usuario.email);
            usuariosAPI.setUser(usuario);
            $scope.logado = true;
            $rootScope.$broadcast('login:updated');
            $location.path("/usuario");
        }, function(response) {
            if(response.status === 404) {
                $scope.invalido = true;
            } else if(response.status === 401) {
                $scope.errado = true;
            }
            console.log(response.status);
        });




    };

    $scope.adicionarUsuario = function(usuario) {
        usuariosAPI.contemUsuario( usuario )
            .then(function(response) {
                usuariosAPI.saveUsuario(usuario);
                $scope.registrar = true;
            }, function(response) {
                $scope.temUsuario = true;
            });
    };



    $scope.changeTypePassword = function() {

        if($scope.typePassword === "password") {
            $scope.typePassword = "text";
            $scope.iconPassword = "fa fa-lg fa-eye text-primary mb-3 sr-icons";
        } else {
            $scope.typePassword = "password";
            $scope.iconPassword = "fa fa-lg fa-eye-slash text-primary mb-3 sr-icons";


        };
    };

    $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.openModal = function (template) {
      $scope.close();
      let modalInstance = $uibModal.open({
        templateUrl: 'view/modal/' + template + '.html',
        controller: 'loginCtrl'
      });
    };

});
