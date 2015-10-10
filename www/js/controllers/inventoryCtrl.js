/**
 * Created by CliffEby on 9/18/2015.
 */
angular.module('mobilehope')
    .controller('InventoryCtrl', ['$scope', '$state', '$stateParams', 'mobileHopeDataService',
        function ($scope, $state, $stateParams, mobileHopeDataService) {
            var vm = this;
            mobileHopeDataService.getCategoryData()
                .then(function (cats) {
                    vm.categories = cats.data;
                    console.log('cats', vm.categories);
                });
        }]);
