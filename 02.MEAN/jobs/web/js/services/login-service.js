(function(angular, btoa) {
  'use strict';

  angular.module('login').factory('LoginService', service)

  service.$inject = ['$http', 'api'];

  function service($http, api) {
    const svc = {};

    svc.authenticate = (user) => {
      const _base64 = btoa(`${user.name}:${user.password}`);
      const _config = {
        headers: {
          authorization: `Basic ${_base64}`
        }
      };
      return $http.get(api.profile, _config);
    };

    return svc;
  }

})(window.angular, window.btoa);
