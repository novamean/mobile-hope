angular.module('mobilehope.controllers')
.factory('mobileHopeDataService', ['$http','SERVER',function ($http,SERVER) {
    var factory = {};

        //factory.getCategoryData = function () {
        //    var categories = ([
        //        {title: 'Clothing - hope', id: 1},
        //        {title: 'Food', id: 2},
        //        {title: 'School Supplies', id: 3}
        //    ]);
        //    return categories;
        //};
        //factory.getCategoryData = function() {
        //    var categories =  $http({
        //        method: 'GET',
        //        url: SERVER.url + ''
        //    }).then(function(response){
        //        console.log('Success: ',response);
        //        return{
        //        categories: response}
        //    }, function(data){});
        //    return categories;
        //};
        factory.getCategoryData = function() {
            var categories = [];
                return $http({
                        method: 'GET',
                        url: SERVER.url + '/categories'+ SERVER.apiKey
                    }).then(function(response){
                            categories = response;
                            console.log('Success: ',response, categories);
                            return categories;
                        })
                };

    factory.getItemData = function (id) {
        var id = id;
        var allItems = [];
        return $http({
            method: 'GET',
            url: SERVER.url + '/allItems'+ SERVER.apiKey
        }).then(function(response){
            allItems = response;
            console.log('Success: ',response, allItems);
            return allItems;
        })
    };

    //    function filterByID(allItems) {
    //        if (allItems.itemId == id) {
    //            //console.log(id,'true');
    //            return true;
    //        } else {
    //            //console.log(id,'false');
    //            return false;
    //        }
    //    };
    //    var items = allItems.filter(filterByID);
    //    return items;
    //};
    factory.getCategoryName = function (id) {
        var name = this.getCategoryData()[id - 1].title;
        return name;
    };
    return factory
}]);