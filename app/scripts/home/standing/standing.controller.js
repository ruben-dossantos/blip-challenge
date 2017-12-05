(function(){
	'use strict'

	angular.module('blipApp')
	.controller('StandingController', StandingController)

	StandingController.$inject = ['standingData', 'seasonsData', 'leagueData', 'seasonId', '$location']
	function StandingController(standingData, seasonsData, leagueData, seasonId, $location){
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
	}
})()