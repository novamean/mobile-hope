describe("Unit tests for InventoryCtrl", function() {

    var scope, controller;
    beforeEach(module('mobilehope'));

    beforeEach(inject(function (
        $rootScope,
        $controller,
        $ionicModal,
        $ionicPopup,
        $stateParams,
        $timeout,
        $httpBackend,
        $state) {

        scope = $rootScope.$new();

        controller = $controller('InventoryCtrl', {
            $scope: scope,
            $ionicModal: $ionicModal,
            $ionicPopup: $ionicPopup,
            $state: $state,
            httpBackend: $httpBackend

        });
    }));

    // tests start here

   it("should have a scope variable defined", function() {
        expect(scope).toBeDefined();
    });

   it("should have a categories array",inject['inventoryDataService', function(inventoryDataService){
        expect(scope.categories.length).toBeDefined();
    }]);
    describe("A spy, when configured to fake a return value", function() {
        var foo, bar, fetchedBar;

        beforeEach(function() {
            foo = {
                setBar: function(value) {
                    bar = value;
                },
                getBar: function() {
                    return bar;
                }
            };

            spyOn(foo, "getBar").and.returnValue(745);

            foo.setBar(123);
            fetchedBar = foo.getBar();
        });

        it("tracks that the spy was called", function() {
            expect(foo.getBar).toHaveBeenCalled();
        });

        it("should not effect other functions", function() {
            expect(bar).toEqual(123);
        });

        it("when called returns the requested value", function() {
            expect(fetchedBar).toEqual(745);
        });
    });
    describe("inventoryDataService", function () {
        var inventoryDataService, httpBackend;

        beforeEach(inject(function (_inventoryDataService_, $httpBackend) {
            inventoryDataService = _inventoryDataService_;
            httpBackend = $httpBackend;
        }));
        it('service should create an array with at least one article object fetched from XHR',(function() {
            // Create sample article using the Articles service
            var sampleCategory = {
                title: 'Clothing',
                id: 1
            };

            // Create a sample articles array that includes the new article
            var sampleCategories = [sampleCategory];

            // Set GET response
            httpBackend.expectGET('api/inventory').respond(sampleCategories);

            // Run controller functionality
            scope.categories = inventoryDataService.getCategoryData();
            httpBackend.flush();

            // Test scope value
            expect(scope.categories).toEqualData(sampleCategories);
        }));



    });

    //it('should have categories array with three .title and ;id items',inject['inventoryDataService', function(inventoryDataService){
    //    expect(inventoryDataService.getData()).toEqual([
    //            {title: 'Clothing', id: 1},
    //            {title: 'Food', id: 2},
    //            {title: 'School Supplies', id: 3}
    //        ]
    //)}]);
    });

