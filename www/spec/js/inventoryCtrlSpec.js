describe("Unit tests for InventoryCtrl", function () {

    var scope, controller;
    beforeEach(module('mobilehope'));
    beforeEach(module('mobilehope.controllers'));

    beforeEach(inject(function ($rootScope,
                                $controller,
                                $ionicModal,
                                $ionicPopup,
                                $stateParams,
                                $timeout,
                                $state) {
        scope = $rootScope.$new();

        controller = $controller('InventoryCtrl', {
            $scope: scope,
        //    $ionicModal: $ionicModal,
        //    $ionicPopup: $ionicPopup,
        //    $state: $state
        });
    }));

    it("should have a scope variable defined", function () {
        expect(scope).toBeDefined();
    });
//TODO scope.categories is not defined??
    xit("should have a accounts array", function () {
        expect(scope.categories.length).toBe(3);
    });
});

