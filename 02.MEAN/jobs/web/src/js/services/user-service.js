(function(angular) {
  'use strict';

  angular.module('jobs').service('UserService', service)

  service.$inject = ['$http', 'api', '$q'];

  function service($http, api, $q) {
    const svc = this;

    svc.getUser = (_id) => {
    return $http.get(api.user + '/' + _id);
    };

    svc.getUsers = () => {
      return $http.get(api.users);
    };

    svc.saveUser = (user) => {
      if(user._id) {
        return $http.put(api.user + '/' + user._id, user);
      } else {
        return $http.post(api.user, user);
      }
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
