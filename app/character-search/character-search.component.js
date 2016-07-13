'use strict'
angular.
	module('characterSearch').
	component('characterSearch', {
		templateUrl: 'character-search/character-search.template.html',
		controller: ['$location',
			function CharacterSearchController($location){
				var self = this;
				self.character = "";
				self.search = function search(){
					$location.path('/detail');
				};
			}
		]
	});