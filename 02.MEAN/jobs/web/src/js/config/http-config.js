(function(angular) {
  'use strict';

  angular.module('jobs').config(config);

  config.$inject = ['$httpProvider'];

  function config($httpProvider) {
    $httpProvider.interceptors.push('BasicAuthInterceptor');
  }

})(window.angular);
