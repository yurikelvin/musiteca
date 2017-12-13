angular.module("musiteca").controller("loginCtrl", function($uibModal, $uibModalInstance, $scope, $location, usuariosAPI, $http) {


    $scope.typePassword = "password";
    $scope.iconPassword = "fa fa-lg fa-eye-slash text-primary mb-3 sr-icons";
    $scope.registrar = false;
    $scope.temUsuario = false;


    $scope.logar = function(usuario) {

        $http.post("http://localhost:8080/autenticar", angular.copy(usuario), {headers: {
                'Content-Type': 'application/json'
            }}).then(function(response) {
           localStorage.setItem("userToken", response.data.token);
           carregaUsuario(usuario.login);
        }, function(response) {
            console.log("deu altas merd");
        });



        $location.path("/usuario");
    };

    var carregaUsuario = function(login, token) {
        $http.get("http://localhost:8080/usuarios/u/" + login)
            .then(function(response) {
                usuariosAPI.buildUser(response.data);
                console.log("ta carregando chefe");
            }, function(response) {

            })
    }

    $scope.adicionarUsuario = function(usuario) {
        let data = {
                "login": "testenovo",
                "nome": "yuri kelvin",
                "senha": "1234",
                "role": "ADMIN",
                "artistas": [
                    {
                        "nome": "Justin Timberlake",
                        "imagem": "https://energy106.ca/wp-content/uploads/2017/10/160506132148-justin-timberlake-11-2015-super-169.jpg",
                        "ultimaOuvida": "Não definido ainda",
                        "favorito": true,
                        "selecionado": true,
                        "albuns": [
                            {
                                "nome": "The 20/20 Experience",
                                "imagem": "https://store.hmv.com/HMVStore/media/product/893391/01-893391.jpg",
                                "ano": "2013",
                                "artistaNome": "Justin Timberlake",
                                "musicas": [
                                    {
                                        "albumNome": "The 20/20 Experience",
                                        "nomeArtist": "Justin Timberlake",
                                        "nome": "Mirrors",
                                        "duracao": "4 minutos",
                                        "ano": "2013"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "playlists":[
                    {
                        "musicas": [
                            {
                                "albumNome": "The 20/20 Experience",
                                "nomeArtist": "Justin Timberlake",
                                "nome": "Mirrors",
                                "duracao": "4 minutos",
                                "ano": "2013"
                            }
                        ],
                        "nome":"Party",
                        "imagem":"https://media.textadventures.co.uk/coverart/b69281d8-93b6-4c6a-a964-441dddfe8a9d.jpg",
                        "descricao":"Esta descrição marota",
                        "data":"2017-12-12T12:03:28.087Z"

                    }
                ],
                "favoritos": [
                    {
                        "nome": "Justin Timberlake",
                        "imagem": "https://energy106.ca/wp-content/uploads/2017/10/160506132148-justin-timberlake-11-2015-super-169.jpg",
                        "ultimaOuvida": "Não definido ainda",
                        "favorito": true,
                        "selecionado": true,
                        "albuns": [
                            {
                                "nome": "The 20/20 Experience",
                                "imagem": "https://store.hmv.com/HMVStore/media/product/893391/01-893391.jpg",
                                "ano": "2013",
                                "artistaNome": "Justin Timberlake",
                                "musicas": [
                                    {
                                        "albumNome": "The 20/20 Experience",
                                        "nomeArtist": "Justin Timberlake",
                                        "nome": "Mirrors",
                                        "duracao": "4 minutos",
                                        "ano": "2013"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ;
        $http.post("http://localhost:8080/usuarios", data, {headers: {
                'Content-Type': 'application/json'
            }}).then(function(response) {
        }, function(response) {

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
