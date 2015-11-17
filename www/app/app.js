angular.module('mobilehope', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'app/inventory/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.inventory', {
        url: '/inventory',
        views: {
          'tab-inventory': {
            templateUrl: 'app/inventory/tab-inventory.html',
            controller: 'InventoryCtrl'
          }
        }
      })

      .state('tab.addItem', {
        url: '/addItem',
        views: {
          'tab-addItem': {
            templateUrl: 'app/inventory/tab-addItem.html',
            controller: 'AddItemCtrl'
          }
        }
      })

      .state('tab.distribute', {
        url: '/distribute',
        views: {
          'tab-distribute': {
            templateUrl: 'app/inventory/tab-distribute.html',
            controller: 'DistributeCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/inventory');

  });
