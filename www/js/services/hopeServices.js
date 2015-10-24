angular.module('mobilehope.controllers')
    .factory('mobileHopeDataService', ['$http','$q', 'SERVER',  function ($http,$q, SERVER) {
        var factory = {};
        factory.getCategoryData = function () {
              return $http.get(SERVER.url+'/categories')
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
        }



        factory.getItemData = function () {
            return $http.get(SERVER.url+'/items')
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        console.log(response.data);
                        return response.data;

                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
        };
        return factory
    }]);