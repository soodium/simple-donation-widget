'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.donation-widget'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // redirect to donations page
  $routeProvider.otherwise({redirectTo: '/donation-page'});
}]);
