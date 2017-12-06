(function(){
	'use strict'

	angular.module('blipApp')
	.component('player', {
		templateUrl: 'scripts/player/player.html',
		bindings: {
			playerData: '<'
		}
	})
})()