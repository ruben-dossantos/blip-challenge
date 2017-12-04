(function(){
	'use strict'

	angular.module('blipApp')
	.component('loading', {
		template: '<img src="images/spinner.gif" ng-if="$ctrl.show">',
		controller: LoadingController
	})

	LoadingController.$inject = ['$rootScope']
	function LoadingController($rootScope){
		let $ctrl = this
		let listener

		$ctrl.$onInit = () => {
			$ctrl.show = false
			listener = $rootScope.$on('spinner:activate', onSpinnerActivate)
		}

		$ctrl.$onDestroy = () => {
			listener()
		}

		function onSpinnerActivate(event, data){
			$ctrl.show = data.on
		}
	}

})()