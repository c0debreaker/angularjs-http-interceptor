'use strict';

angular.module('angularjsHttpInterceptor', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'mm.foundation'])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('HTTPInterceptor');

  });
