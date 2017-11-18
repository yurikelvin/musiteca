angular.module("musiteca").controller("mainCtrl", function($uibModal, $scope, artistasAPI, albunsAPI) {

	$scope.artistas = artistasAPI.getArtistas();
	$scope.albuns = albunsAPI.getAlbuns();
	$scope.musicas = albunsAPI.getMusicas();

	$scope.openModal = function (template) {
      var modalInstance = $uibModal.open({
        templateUrl: 'view/modal/' + template + '.html',
        controller: template + 'Ctrl'
      });
    };


});