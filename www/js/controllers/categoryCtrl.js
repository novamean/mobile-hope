/**
 * Created by CliffEby on 9/18/2015.
 */
angular.module('mobilehope')
    .controller('CategoryCtrl', ['$scope',"$http", '$stateParams', 'mobileHopeDataService',
        function ($scope,$http, $stateParams, mobileHopeDataService) {
            var vm = this;
            vm.categoryId = $stateParams.categoryId;
            console.log('catId',vm.categoryId);
            vm.items = mobileHopeDataService.getItemData(vm.categoryId)
                .then(function (items) {
                    vm.items = items.data;

            vm.categoryName = mobileHopeDataService.getCategoryName(vm.categoryId);
        })}]);