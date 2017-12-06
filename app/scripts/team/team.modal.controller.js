(function(){
	'use strict'

	angular.module('blipApp')
	.controller('TeamModalController', TeamModalController)

	TeamModalController.$inject = ['$uibModalInstance', 'teamData']
	function TeamModalController($uibModalInstance, teamData){
		let teamModalCtrl = this

		teamModalCtrl.teamData = teamData

		teamModalCtrl.selectPlayer = player => teamModalCtrl.playerData = player

		teamModalCtrl.unselectPlayer = () => teamModalCtrl.playerData = undefined

		teamModalCtrl.ok = () => $uibModalInstance.close()

	}
})()