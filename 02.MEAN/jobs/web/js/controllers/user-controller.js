(function(angular) {
  'use strict';

  angular.module('jobs').controller('UserController', controller);

  controller.$inject = ['UserService', '$routeParams'];

  function controller(UserService, $routeParams) {
    const vm = this;

    vm.initForm = () => {
      let _id = $routeParams.id;

      if(_id) {
        UserService
          .getUser(_id)
          .then((res) => {
            vm.user = res.data;
          })
      }
    };

    vm.save = (user) => {
      UserService
        .saveUser(user)
        .then((res) => {
          if(!user._id) {
            user._id = res.data._id;
          }
        })
    };

    vm.remove = (user) => {
      UserService
        .remove(user._id)
        .then((res) => {
          vm.user = {};
        })
    };
  }

})(window.angular);
