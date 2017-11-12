angular.module("musiteca").controller("detalhesAlbumCtrl", function($scope, $routeParams, albunsAPI) {

	$scope.album = albunsAPI.getAlbum($routeParams.id);
  $scope.musicas = albunsAPI.getMusicasAlbum($routeParams.id);

  $scope.ordenarPor = function(campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
   };


});