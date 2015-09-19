/**
 * Created by CliffEby on 9/18/2015.
 */
angular.module('mobilehope')
    .controller('CategoryCtrl', ['$scope', '$state', '$stateParams', 'mobileHopeDataService',
        function ($scope, $state, $stateParams, mobileHopeDataService) {
            var vm = this;
            vm.categoryId = $stateParams.categoryId;
            vm.items = mobileHopeDataService.getItemData(vm.categoryId);
            vm.categoryName = mobileHopeDataService.getCategoryName(vm.categoryId);
        }]);