angular.module("musiteca").controller("loginCtrl", function($uibModal, $uibModalInstance, $scope, $location, usuariosAPI) {


    $scope.typePassword = "password";
    $scope.iconPassword = "fa fa-lg fa-eye-slash text-primary mb-3 sr-icons";
    $scope.registrar = false;


    $scope.logar = function(usuario) {
        console.log(usuariosAPI.user.role);
        usuariosAPI.user.role = "user";
        $location.path("/usuario");
        $scope.close();
        $scope.$apply();
    };

    $scope.changeTypePassword = function() {

        if($scope.typePassword == "password") {
            $scope.typePassword = "text";
            $scope.iconPassword = "fa fa-lg fa-eye text-primary mb-3 sr-icons";
        } else {
            $scope.typePassword = "password";
            $scope.iconPassword = "fa fa-lg fa-eye-slash text-primary mb-3 sr-icons";


        };
    };

    $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    }

    $scope.openModal = function (template) {
      $scope.close();
      var modalInstance = $uibModal.open({
        templateUrl: 'view/modal/' + template + '.html',
        controller: 'loginCtrl'
      });
    };

});
