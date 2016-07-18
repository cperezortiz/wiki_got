angular.
	module('characterDetail').
	component('characterDetail', {
		templateUrl: '/character-detail/character-detail.template.html',
		controller: ['IceFire', '$routeParams',
			function CharacterDetailController(IceFire, $routeParams){
				// Use restful client to call got api
				// fill my objects
				var self = this;

				console.log($routeParams.characterName);
				self.character = IceFire.query();
			}
		]
	});