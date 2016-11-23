(function(angular) {
  'use strict';

  angular.module('jobs').config(config);

  config.$inject = ['$mdIconProvider'];

  function config($mdIconProvider) {
    $mdIconProvider
      .icon('navigation:menu', '/img/icons/ic_menu.svg')
      .icon('social:people', '/img/icons/ic_people.svg');
  }

})(window.angular);
