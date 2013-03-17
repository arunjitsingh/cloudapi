// Copyright 2013 Arunjit Singh. All Rights Reserved.

/**
 * @fileoverview Some controllers.
 *
 * @author Arunjit Singh <arunjit@me.com>
 */

'use strict';

(function() {

function StringerCtrl($scope, $log, $rootScope, gapiclient) {
  $scope.name = 'asdf';
  $scope.email = 'asdf@asdf.net';
  $scope.stringified = '';
  $scope.stringify = function() {
    gapiclient.apitest.email.stringify({
      'name': $scope.name,
      'email': $scope.email
    }).execute(function(response) {
      $log.info(response);
      $rootScope.$apply(function() {
        $scope.stringified = response['email_string'];
      });
    });
  };
}

angular.module('controllers', ['gapi']).
    controller(
        'StringerCtrl',
        ['$scope', '$log', '$rootScope', 'gapiclient', StringerCtrl]);

})();


