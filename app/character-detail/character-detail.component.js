angular.
	module('characterDetail').
	component('characterDetail', {
		templateUrl: '/character-detail/character-detail.template.html',
		controller: ['IceFire', '$routeParams',
			function CharacterDetailController(IceFire, $routeParams){
				// Use restful client to call got api
				// fill my objects
				var self = this;

				// self.character = IceFire.query();
				self.character = IceFire.query({name: $routeParams.characterName});
			}
		]
	});