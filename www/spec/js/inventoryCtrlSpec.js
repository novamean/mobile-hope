(function () {
    'use strict';

    describe("The InventoryCtrl", function () {
        var scope, controller;
        beforeEach(module('mobilehope'));

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();

            controller = $controller('InventoryCtrl', {
                $scope: scope,
            });
        }));

        it('should have scope', function () {
            expect(scope).toBeDefined();
        });

        it("should have a list of categories attached to the scope", function () {
            expect(Array.isArray(scope.categories)).toBe(true);
        });
    });
}());

