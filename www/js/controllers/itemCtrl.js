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

            vm.categories = function(){
                mobileHopeDataService.getCategoryData()
                    .then(function (data) {
                        vm.categories = data;
                    });
            };
            vm.categoryName = function () {
                vm.categories[vm.categoryId - 1].categoryTitle;
            };

            vm.getItem = function() {
                mobileHopeDataService.getItem()
                    .then(function (data) {
                        vm.item = data;
                    });
            }
        }]);