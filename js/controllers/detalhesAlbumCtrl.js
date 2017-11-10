angular.module("musiteca").controller("detalhesAlbumCtrl", function($scope, $routeParams, albunsAPI) {

	$scope.album = albunsAPI.getAlbum($routeParams.id);
  $scope.musicas = albunsAPI.getMusicas($scope.album.idAlbum);

  $scope.ordenarPor = function(campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
   };


});