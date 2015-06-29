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

            if (rejection.data.status === 400) {
              var GlobalAlerts = $injector.get('GlobalAlerts');
              GlobalAlerts.setHttpCodeToMessage(rejection.data.status, rejection.data.message);
            }

            if (rejection.data.status === 401) {
              var Session = $injector.get('Session');
              Session.destroy('Your token has expired!');
            }

            // Return the promise rejection.
            return $q.reject(rejection);
          }
        };
        return HTTPInterceptor;
  });
