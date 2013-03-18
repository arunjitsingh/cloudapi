// Copyright 2013 Arunjit Singh. All Rights Reserved.

/**
 * @fileoverview Some controllers.
 *
 * @author Arunjit Singh <arunjit@me.com>
 */

'use strict';

(function() {

function StringerCtrl($scope, $log, gapiclient) {
  $scope.name = 'asdf';
  $scope.email = 'asdf@asdf.net';
  $scope.stringified = '';
  $scope.stringify = function(name, email) {
    gapiclient.apitest.email.stringify({
      'name': name,
      'email': email
    }).execute(function(response) {
      $log.info(response);
      $scope.$apply(function() {
        $scope.stringified = response['email_string'];
      });
    });
  };
}

angular.module('controllers', ['gapi']).
    controller('StringerCtrl', ['$scope', '$log', 'gapiclient', StringerCtrl]);

})();


