describe('items component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('items', function () {
      return {
        templateUrl: 'app/items.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<items></items>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
