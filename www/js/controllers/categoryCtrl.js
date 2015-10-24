/**
 * Created by CliffEby on 9/18/2015.
 */
angular.module('mobilehope')
    .controller('CategoryCtrl', ['$scope', '$state', '$stateParams','mobileHopeDataService',
        function ($scope, $state, $stateParams, mobileHopeDataService) {
            var vm = this;
            mobileHopeDataService.getCategoryData()
                .then(function (data) {
                    vm.categories = data;
                });
        }]);
