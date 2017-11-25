angular.module("musiteca").controller("detalhesAlbumCtrl", function($uibModalInstance, $scope, item, artistasAPI) {

  $scope.album = item;
  $scope.musicas = artistasAPI.getMusicasAlbum(item.idAlbum);

  $scope.ordenarPor = function(campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
   };

  $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
  };



});