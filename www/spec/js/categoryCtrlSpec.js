(function () {
    'use strict';

    describe("The CategoryCtrl", function () {
        var scope, controller, stateParams;
        beforeEach(module('mobilehope'));

        beforeEach(inject(function ($rootScope,
                                    $controller,
                                    $stateParams) {

            scope = $rootScope.$new();
            stateParams = { categoryId: 1 };

            controller = $controller('CategoryCtrl', {
                $scope: scope,
                $stateParams: stateParams
            });
        }));

        it('should have scope', function () {
            expect(scope).toBeDefined();
        });

        it('should have a catagory id attached to the scope', function () {
            expect(scope.categoryId).toBe(1);
        });

        it('should have a category name attached to the scope', function () {
            expect(scope.categoryName).toBeDefined();
        });

        it('should have a list of category items attached to the scope', function () {
            expect(Array.isArray(scope.items)).toBe(true);
        });
    });
}());
