'use strict'
angular.
	module('characterSearch').
	component('characterSearch', {
		templateUrl: 'character-search/character-search.template.html',
		controller: ['$location', 'LocalStorage', 'Favorites',
			function CharacterSearchController($location, LocalStorage, Favorites){
				var self = this;
				self.character = "";
				self.search = function search(){
					$location.path('/detail/' + self.character);
				};
				self.saveSession = function saveSession(){
					var favorites = Favorites.getFavorites();
					LocalStorage.setValue('favorites', favorites);
				};
			}
		]
	});