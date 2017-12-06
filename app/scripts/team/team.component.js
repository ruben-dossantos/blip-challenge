(function(){
	'use strict'
	
	angular.module('blipApp')
	.component('team',{
		templateUrl: 'scripts/team/team.html',
		bindings: {
			teamData: '<',
			selectPlayer: '&'
		}
	})
})()
