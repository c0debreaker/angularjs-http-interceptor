'use strict';

angular.module('angularjsHttpInterceptor')
  .factory('UserService', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setDefaultHttpFields({
        cache: false
      });
      RestangularConfigurer.setBaseUrl('http://localhost:8080/v1');
      RestangularConfigurer.setDefaultHeaders({
        'Accept': 'application/json; charset=utf-8',
        'Content-Type': 'application/json; charset=utf-8'
      });
    });
  });
