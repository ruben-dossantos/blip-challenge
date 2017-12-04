(function(){
	'use strict'

	angular.module('blipApp')
	.config(routeConfig)

	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider']
	function routeConfig($stateProvider, $urlRouterProvider){

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'scripts/home.html',
			controller: 'HomeController',
			controllerAs: 'homeCtrl'
		})
		.state('home.standing', {
			url: 'standing/{seasonId}',
			templateUrl: 'scripts/standing/standing.html',
			controller: 'StandingController',
			controllerAs: 'standingCtrl',
			resolve: {
				standingData: ['$stateParams', 'StandingService', function($stateParams, StandingService){
					return StandingService.getStanding($stateParams.seasonId)
				}]
			}
		})

		
	}
})()