(function(angular) {
  'use strict';

  angular.module('jobs').controller('UserController', controller);

  controller.$inject = ['UserService'];

  function controller(UserService) {
    const vm = this;

    vm.initUsers = () => {
      UserService.getUsers()
        .then((res) => {
          vm.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    vm.save = (user) => {
      UserService.saveUser(user)
        .then((res) => {
          vm.user = {};
          vm.initUsers();
        })
        .catch((err) => {
          console.log(err);
        });
    };

    vm.deleteSelected = (users) => {
      let _usersToRemove = users.filter((user) => {
        return user.selected
      });

      UserService.removeAll(_usersToRemove)
        .then((res) => {
          vm.initUsers();
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }

})(window.angular);
