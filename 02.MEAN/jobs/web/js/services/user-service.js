(function(angular) {
  'use strict';

  angular.module('jobs').service('UserService', service)

  service.$inject = ['$http', 'api', '$q'];

  function service($http, api, $q) {
    const svc = this;

    svc.getUsers = () => {
      return $http.get(api.users);
    };

    svc.saveUser = (user) => {
      return $http.post(api.user, user);
    };

    svc.remove = (id) => {
      return $http.delete(`${api.user}/${id}`)
    }

    svc.removeAll = (users) => {
      let promises = users.map((user) => {
        return svc.remove(user._id);
      });

      return $q.all(promises);
    };
  }

})(window.angular);
