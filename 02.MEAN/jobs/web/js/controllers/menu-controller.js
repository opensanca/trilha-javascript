(function(angular) {
  'use strict';

  angular.module('jobs').controller('MenuController', controller);

  controller.$inject = ['$mdSidenav'];

  function controller($mdSidenav) {
    const vm = this;
    const MENU_ID = 'left';

    vm.toggleMenu = function() {
      return $mdSidenav(MENU_ID).toggle();
    };
  }

})(window.angular);
