(function(angular) {
  'use strict';

  angular.module('jobs').service('MessageService', service)

  service.$inject = ['$rootScope'];

  function service($rootScope) {
    const svc = this;

    svc.success = (message) => {
      $rootScope.$broadcast('success-message', message);
    };

    svc.error = (message) => {
      $rootScope.$broadcast('error-message', message);
    };
  }

})(window.angular);
