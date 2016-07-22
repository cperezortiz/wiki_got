angular.
	module('core.favorites').
	factory('Favorites', [
		function(){
			self = this;
			return {
				getFavorites: function(){
					return self.favorites;
				},
				addFavorite: function(data){
					self.favorites.push(data);
				},
				initFavorites: function(data){
					if (data != null){
						self.favorites = data;
					}else{
						self.favorites = [];
					}
				}
			};
		}
	]);