describe('The Standing Controller', function(){
	'use strict'

	let standingController
	let standingData = [
		{id: 1},
		{id: 2}
	]

	beforeEach(function(){
		module('blipApp')

		inject(function($injector){
			let $controller = $injector.get('$controller')
			let $log = $injector.get('$log')

			standingController = $controller('StandingController', {
				$log: $log,
				standingData: standingData
			})
		})
	})


	it('should initialize with standingData', function(){
		expect(standingController).toBeDefined()
		expect(standingController.standingData).toEqual(standingData)
	})

})