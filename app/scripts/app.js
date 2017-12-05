(function(){
  'use strict'

  angular.module('blipApp', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ngTouch',
    'ui.bootstrap'
    ])
  .constant('ApiPath', 'https://soccer.sportmonks.com/api/v2.0')
  .constant('ApiToken', 'HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC')
  .config(config)

  config.$inject = ['$httpProvider']
  function config($httpProvider){
    $httpProvider.interceptors.push('loadingHttpInterceptor')
  }
})()
