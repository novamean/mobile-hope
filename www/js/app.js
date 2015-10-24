// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in login.js
angular.module('mobilehope', ['ionic', 'mobilehope.controllers'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
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
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })

            .state('app.search', {
                url: '/search',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/search.html'
                    }
                }
            })

            .state('app.browse', {
                url: '/browse',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/browse.html'
                    }
                }
            })
            .state('app.inventory', {
                url: '/inventory',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/categories.html',
                        controller: 'CategoryCtrl'
                    }
                }
            })

            .state('app.single', {
                url: '/category/:categoryId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/itemList.html',
                        controller: 'ItemCtrl'
                    }
                }
                //,
                //resolve: {
                //  logSomeParams: ['$stateParams', '$state', function ($stateParams, $state) {
                //    console.log($stateParams);
                //    console.log(this); // this is the state you transitioned From.
                //    console.log($state); // this is the state you transitioned To.
                //  }]
                //}
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('app/search');
    })
    //
    .constant('SERVER', {
        // Local server
        url: 'http://localhost:3000'
    });

