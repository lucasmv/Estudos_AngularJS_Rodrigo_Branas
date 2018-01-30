angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
    var _getContatos = function () {
        return $http.get(config.baseUrl + "/contatos");
    };

    var _saveContatos = function (contato) {
        return $http.post(config.baseUrl + "/contatos", contato);
    };

    var _deleteContatos = function (contatos) {
        return $http.post(config.baseUrl + "/deleteContatos", contatos);
    };

    return {
        getContatos: _getContatos,
        saveContatos: _saveContatos,
        deleteContatos: _deleteContatos
    };
});