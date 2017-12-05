(function(){
	'use strict'

	angular.module('blipApp')
	.service('SeasonService', SeasonService)

	SeasonService.$inject = ['$http', 'ApiPath', 'ApiToken']
	function SeasonService($http, ApiPath, ApiToken){
		let service = this

		service.getSeasons = (leagueId) => {
			return $http.get(
				ApiPath + '/seasons',
				{ params: { api_token: ApiToken } }
				).then((response) => {
					if(!leagueId){
						return response.data.data
					} else {
						return response.data.data.filter(season => season.league_id === parseInt(leagueId))
					}
				})
		}
	}
})()