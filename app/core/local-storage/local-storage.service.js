'use strict'

angular.
	module('core.localStorage').
	factory('LocalStorage', [
		function(){
			return {
				getValue: function(data){
					// console.log(localStorage.getItem(data));
					var dataToRetrieve = localStorage.getItem(data);
					return JSON.parse(dataToRetrieve);
				},
				setValue: function(key, value){
					var dataToStore = JSON.stringify(value);
					localStorage.setItem(key, dataToStore);
				}
			};
		}
	]);