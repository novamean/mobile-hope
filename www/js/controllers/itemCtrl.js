/**
 * Created by CliffEby on 9/18/2015.
 */
angular.module('mobilehope')
    .controller('ItemCtrl', ['$scope',  '$stateParams', 'mobileHopeDataService',
        function ($scope, $stateParams, mobileHopeDataService) {
            var vm = this;
            vm.items = [];
            vm.item = [];
            vm.categoryId = $stateParams.categoryId;

            vm.getItems = mobileHopeDataService.getItemData()
                .then(function (data) {
                   vm.items = data;
                  });

            vm.getCategoryName =
                mobileHopeDataService.getCategoryData()
                    .then(function (data) {
                        vm.categoryName = data[vm.categoryId-1].categoryTitle;
                });

            vm.getItem = function() {
                mobileHopeDataService.getItem()
                    .then(function (data) {
                        vm.item = data;
                    });
            }
        }]);