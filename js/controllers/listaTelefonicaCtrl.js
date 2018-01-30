angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, serialGenerator, contatos) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = contatos.data;
    $scope.accordion = false;

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });

        var contatosApagar = contatos.filter(function (contato) {
            if (contato.selecionado) return contato;
        });

        contatosAPI.deleteContatos(contatosApagar).then(function (response) {
            console.log('ok');
        });
    };

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
});