(function(){
	'use strict'

	angular.module('blipApp')
	.controller('TeamModalController', TeamModalController)

	TeamModalController.$inject = ['$uibModalInstance', 'teamData']
	function TeamModalController($uibModalInstance, teamData){
		let teamModalCtrl = this

		teamModalCtrl.teamData = teamData
		console.log(teamData)

		teamModalCtrl.ok = () => $uibModalInstance.close()

	}
})()