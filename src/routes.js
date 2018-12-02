angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('site', {
      abstract: true,
      component: 'site'
    })
    .state('site.items', {
      url: '/',
      component: 'items'
    })
    .state('site.addItem', {
      url: '/add-item',
      component: 'addItems'
    })
    .state('site.checkout', {
      url: '/checkout',
      component: 'checkout'
    })
    ;
}
