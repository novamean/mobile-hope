'use strict'
    // Category Controller Spec
    describe('Category Controller Tests', function() {
        // Initialize global variables
        var CategoryCtrl,
            scope,
            $httpBackend,
            $stateParams,
            $location;

       beforeEach(function() {
            jasmine.addMatchers({
                toEqualData: function(util, customEqualityTesters) {
                    return {
                        compare: function(actual, expected) {
                            return {
                                pass: angular.equals(actual, expected)
                            };
                        }
                    };
                }
            });
        });

        // Then we can start by loading the main application module
        beforeEach(module('app'));

        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service but then attach it to a variable
        // with the same name as the service.
        beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
            // Set a new global scope
            scope = $rootScope.$new();

            // Point global variables to injected services
            $stateParams = _$stateParams_;
            $httpBackend = _$httpBackend_;
            $location = _$location_;

            // Initialize the Articles controller.
            CategoryCtrl = $controller('CategoryCtrl', {
                $scope: scope
            });
        }));

        it('should have items ready to load', function() {
            expect(CategoryCtrl.items).toEqual([
                    {itemId: 1, item: 'Shirt', size: 'XL'},
                    {itemId: 1, item: 'Slacks', size: 'M'},
                    {itemId: 1, item: 'Hoodie', size: 'S'},
                    {itemId: 1, item: 'Sweater', size: 'M'},
                    {itemId: 2, item: 'Tomato Sauce', size: '8 ozs.'}
                ]
            )});
    });

