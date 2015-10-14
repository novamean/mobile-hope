/**
 * Created by CliffEby on 9/18/2015.
 */
angular.module('mobilehope')
    .controller('CategoryCtrl', ['$scope', '$state', '$stateParams', 'mobileHopeDataService',
        function ($scope, $state, $stateParams, mobileHopeDataService) {
            var vm = this;
            mobileHopeDataService.getCategoryData()
                .then(function (cats) {
                    //vm.categories = cats.data;
                    var array = [];
                    angular.forEach(cats.data, function (element) {
                        array.push(element);
                        vm.categories = array;
                    });
                });
        }]);
