angular.
	module('core.favorites').
	factory('Favorites', [
		function(){
			var favorites = [{name: 'arya'}, {name: 'ned'}];
			return {
				getFavorites: function(){
					return favorites;
				}
			};
		}
	]);