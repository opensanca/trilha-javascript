(function(angular) {
  'use strict';

  angular.module('jobs').controller('UserListController', controller);

  controller.$inject = ['UserService'];

  function controller(UserService) {
    const vm = this;
  }

})(window.angular);
