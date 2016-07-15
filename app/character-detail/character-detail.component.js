angular.
	module('characterDetail').
	component('characterDetail', {
		templateUrl: '/character-detail/character-detail.template.html',
		controller: ['IceFire',
			function CharacterDetailController(IceFire){
				// Use restful client to call got api
				// fill my objects
				var self = this;

				self.character = IceFire.query();
			}
		]
	});