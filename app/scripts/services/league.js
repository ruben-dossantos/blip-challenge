(function () {
	'use strict'

	angular.module('blipApp')
	.service('LeagueService', LeagueService)

	LeagueService.$inject = ['$http', 'ApiPath', 'ApiToken']
	function LeagueService($http, ApiPath, ApiToken){
		let service = this

		service.getLeagues = () => {
			return $http.get(
				ApiPath + '/leagues', 
				{ params: {api_token: ApiToken}}
				).then(response => response.data)
		}

		service.getLeague = (id) => {
			return $http.get(
				ApiPath + '/leagues/' + id, 
				{ params: {api_token: ApiToken}}
				).then((response) => response.data)
		}

	}
})()