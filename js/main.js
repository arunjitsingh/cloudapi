// Copyright 2013 Arunjit Singh. All Rights Reserved.

/**
 * @fileoverview The main script.
 *
 * @author Arunjit Singh <arunjit@me.com>
 */

var main = angular.module('main', []);

main.constant('API_ROOT', 'https://arunjit-test.appspot.com/_ah/api');

main.factory('gapiclient', function() {
  return {
    apitest: gapi.client.apitest
  }
});

var app = angular.module('app', ['gapiclient'], function(gapiclient) {
  gapiclient.apitest.email.stringify({
    'name': 'Arunjit Singh',
    'email': 'arunjit@me.com'}).execute(function(response) {
      console.log(response, response['email_string']);
    });
});
