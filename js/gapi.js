// Copyright 2013 Arunjit Singh. All Rights Reserved.

/**
 * @fileoverview GAPI client provider.
 *
 * @author Arunjit Singh <arunjit@me.com>
 */

'use strict';

angular.module('gapi', []).
    factory('gapiclient', function() {
      if (!gapi || !gapi.client) return {};
      return {
        apitest: gapi.client.apitest
      };
    });
