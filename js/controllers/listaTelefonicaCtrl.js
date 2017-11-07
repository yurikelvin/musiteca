
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter) {
    
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome: "Pedro", telefone: "19181", data: new Date(), operadora: {nome: "Oi", código: 14, categoria:"Celular"}},
        {nome: "Ana", telefone: "5241", data: new Date(), operadora: {nome:"Tim", código: 41, categoria: "Celular"}},
        {nome: "Maria", telefone: "619181", data: new Date(), operadora: {nome: "Vivo", código: 15, categoria: "Celular"}}
    ];

    $scope.operadoras = [
        {nome: "Oi", codigo: 14, categoria:"Celular", preco: 2},
        {nome: "Vivo", codigo: 15, categoria:"Celular", preco: 1},
        {nome: "Tim", codigo: 41, categoria:"Celular", preco:3},
        {nome: "GVT", codigo: 25, categoria:"Fixo", preco: 1},
        {nome: "Embratel", codigo: 21, categoria:"Fixo", preco:2}

    ];

    $scope.adicionarContato = function(contato) {
        $scope.verificaContato = false;

        if(!$scope.temContato($scope.contatos, contato)) {
            $scope.contatos.push(angular.copy(contato));
        } else {
            $scope.verificaContato = true;
        }

        delete $scope.contato;
        $scope.contatoForm.$setPristine();

    }

    $scope.apagarContatos = function(contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if(!contato.selecionado) return contato;
        });

    };

    $scope.isContatoSelecionado = function(contatos){
        return contatos.some(function(contato) {
            return contato.selecionado
        });


    };

    $scope.ordenarPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

        
    $scope.temContato = function(contatos, contatoAVerificar){
        var resposta = false;

        for(i = 0; i < contatos.length; i ++) {
            if(contatos[i] != null) {
                if(contatos[i].nome == contatoAVerificar.nome) {
                    resposta = true;
                }
            }
        }

        return resposta;        
    };

    $scope.verificaContato = false;


});
