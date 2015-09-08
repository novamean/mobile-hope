/**
 * Created by CliffEby on 9/5/2015.
 */
describe('mobilehope DataService -Service', function() {
    var mobileHopeDataService;
    beforeEach(module('mobilehope'));
    beforeEach(inject(function (_mobileHopeDataService_) {
        mobileHopeDataService = _mobileHopeDataService_;
    }));
    it('can get the mobileHopeDataService ', inject(function (mobileHopeDataService) {
        expect(mobileHopeDataService).toBeDefined();
    }));
    it('can get the length of the mock Category array', inject(function (mobileHopeDataService) {
        expect(mobileHopeDataService.getData().length).toEqual(3)
    }));

    //TODo  Look at how to filter in test
    it('mock has a item type Shirt with itemId of 1 at array position 0', inject(function(mobileHopeDataService){
        var oneItem = {
            itemId: 1, item: 'Shirt', size: 'XL'
        };
        expect(mobileHopeDataService.getCategoryData()[0].item).toEqual(oneItem.item);
    }));
    it('mock can get a Category Name', inject(function(mobileHopeDataService){
        var oneCategory = {
            title: 'Clothing', id: 1
        };
        expect(mobileHopeDataService.getCategoryName(1)).toEqual(oneCategory.title);
    }));

});

//TO DO SERVICE IS NOT FOUND??
xdescribe('mobilehope DataService Factory with Jasmine Spies', function() {
    beforeEach(module('mobilehope'));
    var mobileHopeDataService;
    var ctrl;
    beforeEach(inject(function ($controller,_mobileHopeDataService_) {
        spyOn(_mobileHopeDataService_,'getCategoryData').and.callThrough();
        mobileHopeDataService = _mobileHopeDataService_;
        ctrl = $controller('InventoryCtrl');
        console.info(ctrl);
    }));
    it('can get the mobileHopeDataService Factory',(function () {
        expect(mobileHopeDataService.getCategoryData).toHaveBeenCalled();
        expect(mobileHopeDataService.getCategoryData.callCount).toEqual(1);
        expect(ctrl.categories).toEqual([
            {title: 'Clothing', id: 1},
            {title: 'Food', id: 2},
            {title: 'School Supplies', id: 3}
        ]);
    }));
});
