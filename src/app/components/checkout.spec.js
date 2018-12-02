describe('checkout component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('checkout', function () {
      return {
        templateUrl: 'app/checkout.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<checkout></checkout>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
