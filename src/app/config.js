'use strict';

angular.module('angularjsHttpInterceptor', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'mm.foundation'])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, RestangularProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('signedin', {
        url: '/signed',
        templateUrl: 'app/components/authenticated/loggedin.html',
        controller: 'BasicCtrl'
      });

    $urlRouterProvider.otherwise('/');
    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('HTTPInterceptor');
  });
