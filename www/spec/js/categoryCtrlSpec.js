describe("CategoryCtrl", function () {
    // load the controller's module
    beforeEach(module('mobilehope'));
    beforeEach(module('mobilehope.controllers'));
    var scope;
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller('CategoryCtrl', {
            $scope: scope
    })}));

    // tests start here
    //TODO  Scope is not defined
    it('should have scope', function () {
        expect(controller.categoryName).toBeDefined();
    });
});