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
				).then(response => response.data)
		}
	}
})()