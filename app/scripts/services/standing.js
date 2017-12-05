(function(){
	'use strict'

	angular.module('blipApp')
	.service('StandingService', StandingService)

	StandingService.$inject = ['$http', 'ApiPath', 'ApiToken']
	function StandingService($http, ApiPath, ApiToken){
		let service = this

		service.getStanding = (seasonId) => {
			return $http.get(
				ApiPath + '/standings/season/' + seasonId,
				{ params: { api_token: ApiToken } }
				).then(response => {
					let standing = []
					if(response.data.data.length>0){
						angular.forEach(response.data.data[0].standings.data, function(team){
							standing.push({
								team_id: parseInt(team.team_id),
								position: parseInt(team.position),
								team_name: team.team_name,
								games_played: parseInt(team.overall.games_played),
								won: parseInt(team.overall.won),
								draw: parseInt(team.overall.draw),
								lost: parseInt(team.overall.lost),
								goals_scored: parseInt(team.overall.goals_scored),
								goal_difference: parseInt(team.total.goal_difference),
								points: parseInt(team.total.points)
							})
						})
						return standing
					} else {
						return []
					}
					
				})
		}
	}
})()