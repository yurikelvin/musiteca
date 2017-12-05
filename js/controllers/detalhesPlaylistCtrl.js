angular.module("musiteca").controller("detalhesPlaylistCtrl", function($uibModalInstance, $scope, item, usuariosAPI) {

    $scope.playlist = item;
    $scope.musicasPlaylist = usuariosAPI.getMusicasPlaylist("tsubakker", item.nome);
    $scope.musicasSistema = usuariosAPI.getMusicas("tsubakker");

  $scope.removeMusicasPlaylist = function(musicas) {

      var musicasRemanescentes = musicas.filter(function(musica) {
        if(!musica.selected) {
          return musica;
        } else {
          musica.selected = false;
        }
      });

      playlistsAPI.setMusicasToPlaylist(item.idPlaylist, musicasRemanescentes);
      $scope.musicasPlaylist = playlistsAPI.getMusicasPlaylist(item.idPlaylist);
      $scope.playlist = playlistsAPI.getPlaylist(item.idPlaylist);
  };

  $scope.confirmRemoveMusicasPlaylist = function(musicas) {
    swal({
      title: "Você tem certeza?",
      text: "Você tem certeza que deseja remover a(s) música(s) cadastrada(s) na playlist?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        $scope.$apply (function () {
            $scope.removeMusicasPlaylist(musicas);
        });
        swal("Música(s) removida(s) com sucesso.", {icon: "success",});
      } else {

        $scope.$apply(function() {
            $scope.cleanSelect(musicas);
        });
      }
    });
  };

  $scope.cleanSelect = function(musicas) {
    for(i = 0; i < musicas.length; i ++) {
      musicas[i].selected = false;
    };
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

  $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
  };


});
