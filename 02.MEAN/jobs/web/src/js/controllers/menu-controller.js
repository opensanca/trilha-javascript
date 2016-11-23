(function(angular) {
  'use strict';

  angular.module('jobs').controller('MenuController', controller);

  controller.$inject = ['$mdSidenav', '$location'];

  function controller($mdSidenav, $location) {
    const vm = this;
    const MENU_ID = 'left';
    vm.sections = [];

    vm.sections.push({
      title: 'Admnistration',
      itens: [
        { icon: 'social:people', title: 'Users', path: '/users' },
        { icon: 'companies', title: 'Companies', path: '/companies' },
        { icon: 'jobs', title: 'Jobs', path: '/jobs' }
      ]
    });

    vm.sections.push({
      title: 'Personal',
      itens: [
        { icon: 'profile', title: 'My Profile', path: '/profile' },
        { icon: 'logout', title: 'Logout', path: '/login' }
      ]
    });

    vm.toggleMenu = () => {
      return $mdSidenav(MENU_ID).toggle();
    };

    vm.goTo = (iten) => {
      $location.path(iten.path);
      vm.toggleMenu();
    };
  }

})(window.angular);
