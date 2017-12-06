describe('The Player component', function(){
	'use strict'

	let playerComponent
	let player = {
		player_id: 1,
		goals: 22
	}

	beforeEach(function(){
		module('blipApp')

		inject(function($injector){
			let $componentController = $injector.get('$componentController')
			playerComponent = $componentController('player', null, {
				playerData: player
			})
		})
	})

	it('should initialize with player', function(){
		expect(playerComponent).toBeDefined()
		expect(playerComponent.playerData).toEqual(player)
	})
})