/**
 * Created by CliffEby on 9/18/2015.
 */
angular.module('mobilehope')
    .controller('ItemCtrl', ['$scope', "$http", '$stateParams', 'mobileHopeDataService',
        function ($scope, $http, $stateParams, mobileHopeDataService) {
            var vm = this;
            vm.categoryId = $stateParams.categoryId;
            console.log('catId', vm.categoryId);
            vm.items = mobileHopeDataService.getItemData()
                .then(function (items) {
                    //   vm.items = items.data;
                    var array = [];
                    angular.forEach(items.data, function (element) {
                        array.push(element);
                        vm.items = array;
                    });
                });
            vm.categories = mobileHopeDataService.getCategoryData()
                .then(function (cats) {
                    vm.categories = cats.data;
                    vm.categoryName = vm.categories[vm.categoryId - 1].title;
                })
        }]);