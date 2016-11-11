(function(angular) {
  'use strict';

  angular.module('jobs').provider('MessageService', provider)

  function Service(messages, $rootScope) {
    const svc = this;
    svc.messages = messages;

    svc.success = (message) => {
      $rootScope.$broadcast('success-message', message);
    };

    svc.error = (message) => {
      $rootScope.$broadcast('error-message', message);
    };
  }

  function provider() {
    const _provider = {};
    const _messages = {};

    _provider.addMessage = (key, valor) => {
      _messages[key] = valor;
    };

    _provider.$get = ['$rootScope', ($rootScope) => {
      return new Service(_messages, $rootScope);
    }];

    return _provider;
  }

})(window.angular);








// let messages = {};
//
