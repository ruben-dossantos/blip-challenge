(function(){
	'use strict'

	angular.module('blipApp')
	.controller('NavbarController', NavbarController)

	NavbarController.$inject = ['leaguesData']
	function NavbarController(leaguesData){
		let navbarCtrl = this

		navbarCtrl.leaguesData = leaguesData
	}
})()