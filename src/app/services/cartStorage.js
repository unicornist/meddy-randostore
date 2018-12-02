angular
  .module('app')
  .service('cartStorage', function($localStorage) {
  	if (!$localStorage.cartItems) $localStorage.cartItems = {};
	var vm = {
		getCount: function() {
			return vm.getItems().length;
		},
		getItems: function() {
			return Object.values($localStorage.cartItems);
		},
		addItem: function(item) {
			var cartItem = $localStorage.cartItems[item.id];
			if (cartItem)
				cartItem.count = (cartItem.count || 1) + 1;
			else
				$localStorage.cartItems[item.id] = item;
		},
		removeItem: function(itemId) {
			delete $localStorage.cartItems[itemId];
		},
		clear: function() {
			$localStorage.$reset();
		}
	};
	return vm;
  });