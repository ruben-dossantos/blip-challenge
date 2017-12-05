(function(){
	'use strict'

	angular.module('blipApp')
	.config(routeConfig)

	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider']
	function routeConfig($stateProvider, $urlRouterProvider){

		$stateProvider
		.state('home', {
			url: '/',
			views: {
				'navbarContent': {
					templateUrl: 'scripts/navbar/navbar.html',
					controller: 'NavbarController',
					controllerAs: 'navbarCtrl'
				},
				'homeContent': {
					templateUrl: 'scripts/home/home.html',
					controller: 'HomeController',
					controllerAs: 'homeCtrl'
				}
			},
			resolve: {
				leaguesData: ['LeagueService', function(LeagueService){
					return LeagueService.getLeagues()
				}]
			}
		})
		.state('home.standing', {
			url: 'league/{leagueId}/standing/{seasonId}',
			templateUrl: 'scripts/home/standing/standing.html',
			controller: 'StandingController',
			controllerAs: 'standingCtrl',
			resolve: {
				standingData: ['$stateParams', 'StandingService', function($stateParams, StandingService){
					return StandingService.getStanding($stateParams.seasonId)
				}],
				seasonsData: ['$stateParams', 'SeasonService', function($stateParams, SeasonService){
					return SeasonService.getSeasons($stateParams.leagueId)
				}],
				leagueData: ['$stateParams', 'LeagueService', function($stateParams, LeagueService){
					return LeagueService.getLeague($stateParams.leagueId)
				}],
				seasonId: ['$stateParams', function($stateParams){
					return $stateParams.seasonId
				}]
			}
		})
		$urlRouterProvider.otherwise('/')
	}
})()