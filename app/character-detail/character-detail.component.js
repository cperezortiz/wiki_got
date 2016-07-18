angular.
	module('characterDetail').
	component('characterDetail', {
		templateUrl: '/character-detail/character-detail.template.html',
		controller: ['IceFire', '$routeParams', 'Favorites',
			function CharacterDetailController(IceFire, $routeParams, Favorites){
				var self = this;

				// self.character = IceFire.query();
				self.character = IceFire.query({name: $routeParams.characterName});
				self.favCharacter = function favCharacter(){
					Favorites.addFavorite({name: self.character[0].name});
				};
			}
		]
	});