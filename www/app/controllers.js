angular.module('starter.controllers', [])

.controller('InventoryCtrl', function($scope) {})

.controller('AddItemCtrl', function($scope, Inventory) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.inventory = Inventory.all();
  $scope.remove = function(item) {
    Inventory.remove(item);
  };
})

.controller('InventoryDetailCtrl', function($scope, $stateParams, Inventory) {
  $scope.item = Inventory.get($stateParams.inventoryId);
})

.controller('DistributeCtrl', function($scope) {

});
