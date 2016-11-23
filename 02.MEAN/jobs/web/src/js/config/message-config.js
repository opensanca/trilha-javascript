(function(angular) {
  'use strict';

  angular.module('jobs').config(config);

  config.$inject = ['MessageServiceProvider'];

  function config(messageServiceProvider) {
    messageServiceProvider.addMessage('succesInserted', 'Registro inserido com sucesso!');
    messageServiceProvider.addMessage('succesUpdated', 'Registro atualizado com sucesso!');
  }

})(window.angular);
