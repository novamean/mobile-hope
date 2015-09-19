angular.module('mobilehope.controllers')
.factory('mobileHopeDataService', [function () {
    var factory = {};
    factory.getCategoryData = function () {
        var categories = ([
            {title: 'Clothing', id: 1},
            {title: 'Food', id: 2},
            {title: 'School Supplies', id: 3}
        ]);
        return categories;
    };
    factory.getItemData = function (id) {
        var id = id;
        var allItems = ( [
            {itemId: 1, item: 'Shirt', size: 'XL'},
            {itemId: 1, item: 'Slacks', size: 'M'},
            {itemId: 1, item: 'Hoodie', size: 'S'},
            {itemId: 1, item: 'Sweater', size: 'M'},
            {itemId: 2, item: 'Tomato Sauce', size: '8 ozs.'}
        ]);

        function filterByID(allItems) {
            if (allItems.itemId == id) {
                //console.log(id,'true');
                return true;
            } else {
                //console.log(id,'false');
                return false;
            }
        };
        var items = allItems.filter(filterByID);
        return items;
    };
    factory.getCategoryName = function (id) {
        var name = this.getCategoryData()[id - 1].title;
        return name;
    };
    return factory
}]);