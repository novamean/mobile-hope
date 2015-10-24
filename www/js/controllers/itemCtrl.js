/**
 * Created by CliffEby on 9/18/2015.
 */
angular.module('mobilehope')
    .controller('ItemCtrl', ['$scope',  '$stateParams', 'mobileHopeDataService',
        function ($scope, $stateParams, mobileHopeDataService) {
            var vm = this;
            vm.items = [];
            vm.categoryId = $stateParams.categoryId;
            mobileHopeDataService.getItemData()
                .then(function (data) {
                   vm.items = data;
                  });

            vm.categories = mobileHopeDataService.getCategoryData()
                .then(function (data) {
                    vm.categories = data;
            vm.categoryName = vm.categories[vm.categoryId - 1].categoryTitle;
                });
        }]);