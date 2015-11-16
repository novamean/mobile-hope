describe("Unit tests for Category1Ctrl", function () {

    var scope, controller;
    beforeEach(module('mobilehope'));
    beforeEach(module('mobilehope.controllers'));

    var mobileHopeDataService;
    var ctrl;
    beforeEach(inject(function ($controller, _mobileHopeDataService_, $rootScope) {
        spyOn(_mobileHopeDataService_, 'getCategoryData').and.callThrough();
        mobileHopeDataService = _mobileHopeDataService_;
        scope = $rootScope.$new();
        ctrl = $controller('CategoryCtrl',{
            $scope: scope,
            id:1
        });

    }));

    it("should have access to dataservice methods", function () {
        expect(mobileHopeDataService.getCategoryData()[ctrl.id]).toBeDefined();
       // expect(mobileHopeDataService.getItemData(1)).toBeUndefined();
    });
    it("should be able to get Item data", function () {
        expect(ctrl.items).toBeUndefined();
        scope.getItemData(1);
        expect(ctrl.items).toBeDefined();
    });
});

