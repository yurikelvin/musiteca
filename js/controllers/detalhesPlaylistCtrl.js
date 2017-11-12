angular.module("musiteca").controller("detalhesPlaylistCtrl", function($scope, $routeParams, playlistsAPI, albunsAPI) {

	$scope.playlist = playlistsAPI.getPlaylist($routeParams.idPlaylist);
  $scope.musicasPlaylist = playlistsAPI.getMusicasPlaylist($routeParams.idPlaylist);
  $scope.musicasSistema = albunsAPI.getMusicas();

  $scope.removeMusicasPlaylist = function(musicas) {

      var musicasRemanescentes = musicas.filter(function(musica) {
        if(!musica.selected) {
          return musica;
        } else {
          musica.selected = false;
        }
      });

      playlistsAPI.setMusicasToPlaylist($routeParams.idPlaylist, musicasRemanescentes);
      $scope.musicasPlaylist = playlistsAPI.getMusicasPlaylist($routeParams.idPlaylist);
      $scope.playlist = playlistsAPI.getPlaylist($routeParams.idPlaylist);
  };

  $scope.isMusicasSelecionado = function(musicas){
      return musicas.some(function(musica) {
          return musica.selected;
      });


  };

  $scope.ordenarPor = function(campo) {
      $scope.criterioDeOrdenacao = campo;
      $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  $scope.check = {
    id: 4,
    name: 'light',
    icon: {
      on: 'img/check.png',
      off: 'img/unchecked.png'
    }
  };

  $scope.getIcon = function(data, isChecked){
    if (data.icon) {
        if (isChecked) return data.icon.on;
    else return data.icon.off;
    }
  };

  $scope.addToPlaylist = function(musica) {
    $scope.playlist.musicas.push(musica);
  };


});