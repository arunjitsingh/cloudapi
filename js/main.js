// Copyright 2013 Arunjit Singh. All Rights Reserved.

/**
 * @fileoverview The main script.
 *
 * @author Arunjit Singh <arunjit@me.com>
 */

main = this.main || {};

main.init = function() {
  gapi.client.apitest.email.stringify({
    'name': 'Arunjit Singh',
    'email': 'arunjit@me.com'}).execute(function(response) {
      console.log(response, response['email_string']);
    });
};
