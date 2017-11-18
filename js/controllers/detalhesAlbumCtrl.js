angular.module("musiteca").controller("detalhesAlbumCtrl", function($uibModalInstance, $scope, item, albunsAPI) {

  $scope.album = item;
  $scope.musicas = albunsAPI.getMusicasAlbum(item.idAlbum);

  $scope.ordenarPor = function(campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
   };

  $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
  };



});