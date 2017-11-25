angular.module("musiteca").controller("loginCtrl", function($uibModal, $uibModalInstance, $scope, $timeout, artistasAPI, artistasFavoritosAPI, $filter, $location) {


    $scope.typePassword = "password";
    $scope.iconPassword = "fa fa-lg fa-eye-slash text-primary mb-3 sr-icons";
    $scope.registrar = false;

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