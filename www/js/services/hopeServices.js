angular.module('mobilehope.controllers')
    .factory('mobileHopeDataService', ['$http', 'SERVER', function ($http, SERVER) {
        var factory = {};
        factory.getCategoryData = function () {
            var categories = [];
            return $http({
                method: 'GET',
              //  url: SERVER.url + '/categories' + SERVER.apiKey
                url: SERVER.url + '/categories'+ SERVER.apiKey
            }).then(function (response) {
                categories = response;
                console.log('Success: ', response, categories);
                return categories;
            })
        };

        factory.getItemData = function () {
           var allItems = [];
            return $http({
                method: 'GET',
                url: SERVER.url + '/allItems'+ SERVER.apiKey
            }).then(function (response) {
                allItems = response;
                console.log('Success: ', response, allItems);
                return allItems;
            })
        };
        return factory
    }]);