angular
  .module('app')
  .component('items', {
	templateUrl: 'app/components/items.html',
	controller: function ($scope, $state, $http, cartStorage) {
		$http.get("/api/items")
		.then(function(res){
			$scope.items = res.data;
		});

		$scope.addToCart = function (item) {
			console.log("add to cart:", item);
			cartStorage.addItem(item);
		}
	}
  });