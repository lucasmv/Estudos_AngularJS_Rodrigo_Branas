angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, $location, serialGenerator, operadoras) {

    $scope.operadoras = operadoras.data;

    $scope.adicionarContato = function (contato) {

        contato.serial = serialGenerator.generate();

        contatosAPI.saveContatos(contato).then(function (response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");
        });
    };
});