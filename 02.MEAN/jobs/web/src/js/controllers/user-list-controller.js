(function(angular) {
  'use strict';

  angular.module('jobs').controller('UserListController', controller);

  controller.$inject = ['UserService', '$location'];

  function controller(UserService, $location) {
    const vm = this;

    vm.initList = () => {
      UserService
        .getUsers()
        .then((resp) => {
          vm.users = resp.data;
        });
    };

    vm.new = () => {
      $location.path('/user/new');
    };

    vm.edit = (user) => {
      $location.path(`/user/${user._id}/edit`);
    };

  }

})(window.angular);
