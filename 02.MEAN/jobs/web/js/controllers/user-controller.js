(function(angular) {
  'use strict';

  angular.module('jobs').controller('UserController', controller);

  controller.$inject = [];

  function controller() {
    const vm = this;

    vm.initUsers = () => {
      vm.users = [];
    };

    vm.save = (user) => {
      vm.users.push(user);
      vm.user = {};
    };

    vm.deleteSelected = (users) => {
      vm.users = users.filter((user) => {
        return !user.selected
      });
    };
  }

})(window.angular);
