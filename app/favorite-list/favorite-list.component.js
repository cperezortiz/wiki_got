'use strict'
angular.
	module('favoriteList').
	component('favoriteList', {
		templateUrl: 'favorite-list/favorite-list.template.html',
		controller: ['Favorites',
			function FavoriteListController(Favorites){
				var self = this;
				self.favorites = Favorites.getFavorites();
			}
		]
	});