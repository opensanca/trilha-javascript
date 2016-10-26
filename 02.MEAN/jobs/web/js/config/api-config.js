(function(angular) {
  'use strict';

  const _baseApiPath = 'http://localhost:3000/'
  const _api = {
    users: _baseApiPath + 'users',
    user: _baseApiPath + 'user',
    profile: _baseApiPath + 'user/profile'
  };

  angular.module('config').constant('api', _api);

})(window.angular);
