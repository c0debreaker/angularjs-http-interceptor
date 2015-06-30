'use strict';

angular.module('angularjsHttpInterceptor')
  .factory('HTTPInterceptor', function($q, $injector) {

    var HTTPInterceptor = {
          // On request success
          request: function(config) {
            //Return the config or wrap it in a promise if blank.
            return config || $q.when(config);
          },

          // On request failure
          requestError: function(rejection) {
            //  console.log('$httpInterceptor2',rejection); // Contains the data about the error on the request.

            // Return the promise rejection.
            return $q.reject(rejection);
          },

          // On response success
          response: function(response) {
            //    console.log('$httpInterceptor3',response); // Contains the data from the response.

            // Return the response or promise.
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

            // Return the promise rejection.
            return $q.reject(rejection);
          }
        };
        return HTTPInterceptor;
  });
