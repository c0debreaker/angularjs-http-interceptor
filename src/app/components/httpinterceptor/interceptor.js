'use strict';

angular.module('angularjsHttpInterceptor')
  .factory('HTTPInterceptor', function($q, $injector) {

    var HTTPInterceptor = {

          request: function(config) {
            return config || $q.when(config);
          },

          // On request failure
          requestError: function(rejection) {
            return $q.reject(rejection);
          },

          // On response success
          response: function(response) {
            return response || $q.when(response);
          },

          // On response failture
          responseError: function(rejection) {

            if (rejection.status === 401) {
              var $state = $injector.get('$state');
              console.log('***** HTTP Interceptor *****');
              console.log('Intercepted HTTP Error 401');
              console.log('Redirecting you back to sign-in page');
              $state.go('login');
            }
            return $q.reject(rejection);
          }
        };
        return HTTPInterceptor;
  });
