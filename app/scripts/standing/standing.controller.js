(function(){
	'use strict'

	angular.module('blipApp')
	.controller('StandingController', StandingController)

	StandingController.$inject = ['standingData']
	function StandingController(standingData){
		let standingCtrl = this
		standingCtrl.standingData = standingData
	}
})()