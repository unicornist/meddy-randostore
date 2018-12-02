describe('site component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('site', function () {
      return {
        templateUrl: 'app/site.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<site></site>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
