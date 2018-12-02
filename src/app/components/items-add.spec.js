describe('items-add component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('items-add', function () {
      return {
        templateUrl: 'app/items-add.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<items-add></items-add>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
