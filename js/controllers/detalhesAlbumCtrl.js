angular.module("musiteca").controller("detalhesAlbumCtrl", function($uibModalInstance, $scope, item, usuariosAPI) {

  $scope.album = item;
  $scope.musicas = usuariosAPI.getMusicas("tsubakker",item.artistaNome, item.nome);

  $scope.ordenarPor = function(campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
   };

  $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
  };



});
