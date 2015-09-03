describe("CategoryCtrl", function() {

    var scope, controller;
    beforeEach(module('mobilehope'));

    beforeEach(inject(function ($rootScope,
                                $controller,
                                $ionicModal,
                                $ionicPopup,
                                $stateParams,
                                $timeout,
                                $state) {

        scope = $rootScope.$new();

        controller = $controller('CategoryCtrl', {
            $scope: scope,
            $ionicModal: $ionicModal,
            $ionicPopup: $ionicPopup,
            $state: $state

        });
    }));

    // tests start here
//    it("contains spec with an expectation", function () {
//        expect(true).toBe(true);
//    });
    it("should have a scope variable defined", inject['inventoryDataService', function (inventoryDataService) {
        expect(scope).toBeDefined();
    }]);
//
//    it("should have a categories array", inject['inventoryDataService', function (inventoryDataService) {
//        expect(scope.categories.length).toBeDefined();
//    }]);
//
//    it('should have categories array with three .title and ;id items', inject['inventoryDataService', function (inventoryDataService) {
//        expect(inventoryDataService.getCategoryData()).toEqual([
//            {title: 'Clothing', id: 1},
//            {title: 'Food', id: 2},
//            {title: 'School Supplies', id: 3}
//        ])
//    }]);
});

    //xit('should have items ready to load', function() {
    //    expect(inventoryDataService.getCategoryData()).toEqual([
    //                {itemId: 1, item: 'Shirt', size: 'XL'},
    //                {itemId: 1, item: 'Slacks', size: 'M'},
    //                {itemId: 1, item: 'Hoodie', size: 'S'},
    //                {itemId: 1, item: 'Sweater', size: 'M'},
    //                {itemId: 2, item: 'Tomato Sauce', size: '8 ozs.'}
    //            ]
    //        )});
    //});

