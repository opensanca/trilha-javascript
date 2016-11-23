(function(angular) {
  'use strict';

  angular.module('jobs').controller('MessageController', controller);

  controller.$inject = ['$rootScope', '$mdToast'];

  function controller($rootScope, $mdToast) {
    const vm = this;

    vm.init = () => {
      vm.errors = [];

      $rootScope.$on('success-message', (event, message) => {
        $mdToast.show($mdToast.simple().textContent(message))
      });

      $rootScope.$on('error-message', (event, message) => {
        vm.errors.push(message);
      });
    };

  }

})(window.angular);
