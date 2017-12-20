angular.module("musiteca").controller("loginCtrl", function($uibModal, $uibModalInstance, $scope, $location, usuariosAPI, $http) {


    $scope.typePassword = "password";
    $scope.iconPassword = "fa fa-lg fa-eye-slash text-primary mb-3 sr-icons";
    $scope.registrar = false;
    $scope.temUsuario = false;

    let loadArtistas = function (data) {
        let artistas = data;
        for(let i = 0; i < artistas.length; i ++) {
            let artistaDaVez = artistas[i];
            usuariosAPI.adicionaArtista(artistaDaVez.nome, artistaDaVez.imagem, artistaDaVez.favorito, artistaDaVez.rate, artistaDaVez.ultimaOuvida);
            if(artistaDaVez.favorito === true) {
                usuariosAPI.adicionaFavoritos(artistaDaVez.nome);
            }
        }

        carregaAlbuns();
    };

    let loadAlbuns = function(data) {
        let albuns = data;
        for(let i = 0; i < albuns.length; i ++) {
            let albumDaVez = albuns[i];
            usuariosAPI.adicionaAlbum(albumDaVez.artistaNome, albumDaVez.nome, albumDaVez.ano, albumDaVez.imagem);
        }

        carregaMusicas();
    };

    let loadMusicas = function(data) {
        let musicas = data;
        for(let i = 0; i < musicas.length; i++) {
            let musicaDaVez = musicas[i];
            usuariosAPI.adicionaMusica(musicaDaVez.nomeArtist, musicaDaVez.albumNome, musicaDaVez.nome, musicaDaVez.duracao, musicaDaVez.ano);
        }

        carregaPlaylists();
    };

    let loadPlaylists = function(data) {
        let playlists = data;
        for(let i = 0; i < playlists.length; i++) {
            let playlist = playlists[i];
            usuariosAPI.adicionaPlaylist(playlist.nome, playlist.imagem, playlist.descricao);
            let musicas = playlist.musicas;
            usuariosAPI.setMusicasPlaylist(playlist.nome, musicas);
        };
    };

    let carregaPlaylists = function() {
        $http.get("http://localhost:8080/usuarios/u/" +  localStorage.getItem("login") + "/playlists")
            .then(function (response) {
                loadPlaylists(response.data);
            }, function (response) {
                console.log(response.status);
            });
    };

    let carregaAlbuns = function () {
        $http.get("http://localhost:8080/usuarios/u/" +  localStorage.getItem("login") + "/albuns")
            .then(function (response) {
                loadAlbuns(response.data);
            }, function (response) {
                console.log(response.status);
            });
    };

    let carregaMusicas = function() {
        $http.get("http://localhost:8080/usuarios/u/" + localStorage.getItem("login") + "/musicas")
            .then(function (response) {
                loadMusicas(response.data);
            }, function (response) {
                console.log(response.status);
            });
    };



    var carregaUsuario = function(login) {
        $http.get("http://localhost:8080/usuarios/u/" + login)
            .then(function(response) {
                usuariosAPI.setUser(response.data.login, response.data.senha, response.data.nome, response.data.role, response.data.email);
                loadArtistas(response.data.artistas);
            }, function(response) {

            });
    }


    $scope.logar = function(usuario) {

        $http.post("http://localhost:8080/autenticar", angular.copy(usuario), {headers: {
                'Content-Type': 'application/json'
            }}).then(function(response) {
           localStorage.setItem("userToken", response.data.token);
            localStorage.setItem("login", usuario.login);
            $location.path("/usuario");
        }, function(response) {
            console.log("deu altas merd");
        });




    };


    $scope.adicionarUsuario = function(usuario) {
        usuariosAPI.contemUsuario( usuario )
            .then(function(response) {
                usuariosAPI.saveUsuario(usuario);
                usuariosAPI.setUser(usuario);
            }, function(response) {
                console.log("ja tem esse usuario yuri");
            });
    };



    $scope.changeTypePassword = function() {

        if($scope.typePassword === "password") {
            $scope.typePassword = "text";
            $scope.iconPassword = "fa fa-lg fa-eye text-primary mb-3 sr-icons";
        } else {
            $scope.typePassword = "password";
            $scope.iconPassword = "fa fa-lg fa-eye-slash text-primary mb-3 sr-icons";


        };
    };

    $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.openModal = function (template) {
      $scope.close();
      let modalInstance = $uibModal.open({
        templateUrl: 'view/modal/' + template + '.html',
        controller: 'loginCtrl'
      });
    };

});
