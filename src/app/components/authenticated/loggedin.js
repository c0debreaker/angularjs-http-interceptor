'use strict';

angular.module('angularjsHttpInterceptor')
  .controller('BasicCtrl', function($scope, UserService) {

   $scope.simulate401 = function() {
      UserService.one('simulate401').customPOST({}, '','').then(function(res) {
        console.log("OK Response", res);
      }, function(error) {
        console.log("Error", error.data.message);
      });
    };

  });
