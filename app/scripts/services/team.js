(function(){
	'use strict'

	angular.module('blipApp')
	.service('TeamService', TeamService)

	TeamService.$inject = ['$http', 'ApiPath', 'ApiToken']
	function TeamService($http, ApiPath, ApiToken) {
		let service = this

		service.getTeam = (teamId) => {
			return $http.get(
				ApiPath + '/teams/' + teamId,
				{ params: { api_token: ApiToken, include: 'squad' } }
				).then( response => response.data.data )
		}
	}
})()