describe("CategoryCtrl", function () {
    // load the controller's module
    beforeEach(module('mobilehope.controllers'));
    var scope;
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('CategoryCtrl', {$scope: scope});
    }));

    // tests start here
    //TODO  Scope is not defined
    xit('should have scope', function () {
        expect(scope).toBeDefined();
    });
});