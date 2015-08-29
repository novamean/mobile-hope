angular.module('mobilehope.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

    .controller('InventoryCtrl',['$scope','$state','inventoryDataService', function($scope,state,inventoryDataService) {
      var vm = this;
      vm.categories=inventoryDataService.getData();
      console.log(vm.categories);

    }])
    .service('inventoryDataService', [ function () {
      this.getData = function () {
        return (
            [
              {title: 'Clothing', id: 1},
              {title: 'Food', id: 2},
              {title: 'School Supplies', id: 3}
            ])
      };
      this.getCategoryData = function () {
        return ( [
          {categoryId: 1, item: 'Shirt', size: 'XL'},
          {categoryId: 1, item: 'Slacks', size: 'M'},
          {categoryId: 1, item: 'Hoodie', size: 'S'},
          {categoryId: 1, item: 'Sweater', size: 'M'},
          {categoryId: 2, item: 'Tomato Sauce', size: '8 ozs.'}
        ])
      };

    }])
    .controller('CategoryCtrl',['$scope','$state','inventoryDataService', function($scope,state,inventoryDataService) {
      var vm = this;
      vm.items=inventoryDataService.getCategoryData();
      console.log(vm.items);
    }]);
