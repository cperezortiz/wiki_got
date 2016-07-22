'use strict'

angular.
	module('gotApp').
	run(['LocalStorage', 'Favorites',
		function(LocalStorage, Favorites){
			//initialize session w/ local storage
			console.log(LocalStorage.getValue('favorites'));
			Favorites.initFavorites(LocalStorage.getValue('favorites'));
		}
	]);