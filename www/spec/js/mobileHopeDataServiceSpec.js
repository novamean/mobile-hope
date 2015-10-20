(function () {
    'use strict';

    describe('The mobilehopeDataService', function () {
        var mobileHopeDataService;
        beforeEach(module('mobilehope'));

        beforeEach(inject(function (_mobileHopeDataService_) {
            mobileHopeDataService = _mobileHopeDataService_;
        }));

        it('can get the mobileHopeDataService ', inject(function (mobileHopeDataService) {
            expect(mobileHopeDataService).toBeDefined();
        }));

        it('can get the length of the mock Category array', inject(function (mobileHopeDataService) {
            expect(mobileHopeDataService.getData().length).toEqual(3);
        }));

        it('mock has a item type Shirt with itemId of 1 at array position 0', inject(function (mobileHopeDataService) {
            var oneItem = {
                itemId: 1, item: 'Shirt', size: 'XL'
            };
            expect(mobileHopeDataService.getCategoryData()[0].item).toEqual(oneItem.item);
        }));

        it('mock can get a Category Name', inject(function (mobileHopeDataService) {
            var oneCategory = {
                title: 'Clothing', id: 1
            };
            expect(mobileHopeDataService.getCategoryName(1)).toEqual(oneCategory.title);
        }));
    });
}());
