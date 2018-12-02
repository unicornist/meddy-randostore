angular
  .module('app')
  .component('checkout', {
	templateUrl: 'app/components/checkout.html',
	controller: function ($scope, $state, cartStorage) {
		$scope.items = cartStorage.getItems();
		this.removeFromCart = function (item) {
			cartStorage.removeItem(item.id);
			$scope.items = cartStorage.getItems();
		}
	}
  });