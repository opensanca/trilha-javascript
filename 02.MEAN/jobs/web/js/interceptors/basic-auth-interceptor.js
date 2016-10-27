(function(angular) {
  'use strict';

  angular.module('jobs').factory('BasicAuthInterceptor', interceptor)

  interceptor.$inject = ['$q', '$window', '$cookies'];

  function interceptor($q, $window, $cookies) {
    const itc = {};
    const CREDENTIAL = 'credential';

    itc.request = (config) => {
      const credential = $cookies.get(CREDENTIAL);
      if(!credential) {
        $window.location.href = '/login.html';
      }
      config.headers.Authorization = credential;
      return config;
    };

    itc.responseError = (rejection) => {
      if(rejection.status === 401 || rejection.status === 403) {
        $window.location.href = '/login.html';
      };
      return $q.reject(rejection);
    };

    return itc;
  }

})(window.angular);
