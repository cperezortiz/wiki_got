'use strict'

angular.
	module('core.iceFire').
	factory('IceFire', ['$resource',
		function($resource){
			return $resource('https://anapioficeandfire.com/api/characters/?name=:name', {}, {
				query: {
					method: 'GET',
					params: {name: 'arya stark'},
					isArray: true
				}
			});
		}
	]);