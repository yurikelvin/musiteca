angular.module("musiteca").controller("musitecaCtrl", function($scope, artistasAPI, $filter, $location) {

	$scope.app = "Musiteca!";

	$scope.artistas = artistasAPI.getArtistas();


    $scope.ordenarPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };



});