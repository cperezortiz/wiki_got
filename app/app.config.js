'use strict';

// Declare app level module which depends on views, and components
angular.
	module('gotApp').
	config(['$locationProvider', '$routeProvider', 
		function($locationProvider, $routeProvider) {
  			$locationProvider.hashPrefix('!');

  			$routeProvider.
  				when('/search', {
  					template: '<character-search></character-search>'
  				}).
  				when('/detail', {
  					template: '<character-detail></character-detail>'
  				}).
  				otherwise('/search');
		}
	]);