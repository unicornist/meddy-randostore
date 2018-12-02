angular
  .module('app')
  .component('addItems', {
	templateUrl: 'app/components/items-add.html',
	controller: function ($scope, $state, $http) {
		this.submit = function () {
			$http.post("/api/items", {
				name: $scope.name,
				price: $scope.price,
				img: $scope.image,
			})
			.then(function(res){
				// res.data;
			});
		}
	}
  });