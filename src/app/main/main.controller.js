'use strict';

angular.module('angularjsHttpInterceptor')
  .controller('MainCtrl', function($scope, $state, UserService) {

    $scope.authenticateUser = function(username, password) {

      var payload = {
        username : username,
        password : password
      };

      UserService.one('login').customPOST(payload, '','').then(function(res) {
        console.log("Success", res);
        $state.go('signedin');
      }, function(error) {
        console.log("Error", error.data.message);
        alert(error.data.message);
      });
    };

  });


