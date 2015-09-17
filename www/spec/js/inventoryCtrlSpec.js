describe("Unit tests for InventoryCtrl", function () {

    var scope, controller;
    beforeEach(module('mobilehope'));
    beforeEach(module('mobilehope.controllers'));

    beforeEach(inject(function ($rootScope,
                                $controller,
                                _mobileHopeDataService_,
                                $ionicModal,
                                $ionicPopup,
                                $stateParams,
                                $timeout,
                                $state) {
        scope = $rootScope.$new();

        controller = $controller('InventoryCtrl', {
            $scope: scope

        //    $ionicModal: $ionicModal,
        //    $ionicPopup: $ionicPopup,
        //    $state: $state
        });
    }));

    it("should have a scope variable defined", function () {
        expect(scope).toBeDefined();
    });
    it("should have a scope.categories variable defined", function () {
        expect(controller.categories).toBeDefined();
    });
    it("should have a accounts array", function () {
        expect(controller.categories.length).toBe(3);
    });
});

