angular.
	module('core.favorites').
	factory('Favorites', [
		function(){
			var favorites = [{name: 'ned'}];
			return {
				getFavorites: function(){
					return favorites;
				},
				addFavorite: function(data){
					// add data to favorites var
					favorites.push(data);
				}
			};
		}
	]);