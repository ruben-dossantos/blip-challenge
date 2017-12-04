(function(){
  'use strict'

  angular.module('blipApp')
  .factory('loadingHttpInterceptor', LoadingHttpInterceptor)

  LoadingHttpInterceptor.$inject = ['$rootScope', '$q']
  function LoadingHttpInterceptor($rootScope, $q){
  	let loadingCount = 0
  	let loadingEventName = 'spinner:activate'

  	return {
  		request: (config) => {
  			if(++loadingCount === 1){
  				$rootScope.$broadcast(loadingEventName, {on:true})
  			}
  			return config
  		},
  		response: (response) => {
  			if(--loadingCount === 0){
  				$rootScope.$broadcast(loadingEventName, {on:false})
  			}
  			return response
  		},
  		responseError: (response) => {
  			if(--loadingCount === 0){
  				$rootScope.$broadcast(loadingEventName, {on:false})
  			}
  			return $q.reject(response)
  		}
  	}
  }
})()