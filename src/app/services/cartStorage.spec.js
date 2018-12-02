describe('cartStorage service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (cartStorage) {
    expect(cartStorage.getItems()).toEqual([]);
  }));
});
