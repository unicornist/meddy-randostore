angular
  .module('app')
  .component('site', {
	templateUrl: 'app/components/site.html',
	controller: function ($scope, $state, cartStorage){
		this.getCartCount = function(){
			return cartStorage.getCount();
		}
	}
  });