angular.module("musiteca").controller("loginCtrl", function($scope, $timeout, artistasAPI, artistasFavoritosAPI, $filter, $location) {


    $scope.typePassword = "password";
    $scope.iconPassword = "fa fa-lg fa-eye text-primary mb-3 sr-icons";
    $scope.registrar = false;

    $scope.changeTypePassword = function() {

        if($scope.typePassword == "password") {
            $scope.typePassword = "text";
            $scope.iconPassword = "fa fa-lg fa-eye-slash text-primary mb-3 sr-icons";
        } else {
            $scope.typePassword = "password";
            $scope.iconPassword = "fa fa-lg fa-eye text-primary mb-3 sr-icons";

        };
    };

});