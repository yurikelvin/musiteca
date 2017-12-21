angular.module("musiteca").controller("detalhesAlbumCtrl", function($uibModalInstance, $scope, item, usuariosAPI) {

  $scope.album = item;
  $scope.musicas = [];

  let carregaMusicas = function() {
      usuariosAPI.getMusicasAlbum(item.artistaNome, item.nome)
          .then(function(response) {
              $scope.musicas = response.data;
          })
  };

  carregaMusicas();

  $scope.ordenarPor = function(campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
   };

  $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
  };



});
