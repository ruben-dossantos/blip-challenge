(function(){
	'use strict'

	angular.module('blipApp')
	.controller('StandingController', StandingController)

	StandingController.$inject = ['standingData', 'seasonsData', 'leagueData', 'seasonId', 'TeamService','$location', '$uibModal']
	function StandingController(standingData, seasonsData, leagueData, seasonId, TeamService, $location, $uibModal){
		let standingCtrl = this
		
		standingCtrl.seasonsData = seasonsData
		standingCtrl.leagueData = leagueData
		standingCtrl.standingData = standingData
		standingCtrl.selectedSeason = seasonId
		standingCtrl.order = 'position'

		standingCtrl.updateStanding = function(){
			let url = 'league/' + leagueData.id + '/standing/' + standingCtrl.selectedSeason
			$location.path(url)
		}
		
		standingCtrl.ordering = (field) => {
			standingCtrl.order = field === standingCtrl.order ? '-' + field : field
		}

		standingCtrl.openTeamModal = (team) => {
			let modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'scripts/team/team.modal.html',
				controller: 'TeamModalController',
				controllerAs: 'teamModalCtrl',
				size: 'lg',
				resolve:{
					teamData: function(){
						return TeamService.getTeam(team)
					}
				}
			})

			modalInstance.result.then(() => {})
		}
	}
})()