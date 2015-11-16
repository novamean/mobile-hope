describe("Unit tests for ItemCtrl", function () {

    var scope, controller;
    beforeEach(module('mobilehope'));
    beforeEach(module('mobilehope.controllers'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller('ItemCtrl', {
            $scope: scope
        });
    }));

    it("should have a scope variable defined", function () {
        expect(scope).toBeDefined();
    });
    it("should have a scope.items variable defined", function () {
        expect(controller.items).toBeDefined();
    });
    it("should have a item array", function () {
        expect(controller.items.length).toBe(9);
    });
});

