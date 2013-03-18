// Copyright 2013 Arunjit Singh. All Rights Reserved.

/**
 * @fileoverview GAPI client provider.
 *
 * @author Arunjit Singh <arunjit@me.com>
 */

'use strict';

angular.module('gapi', []).
    provider('gapiclient', function() {
      this.$get = function() {
        console.log('gapiclient.$get: gapi.client');
        if (!window.gapi) return {};
        return gapi.client;
      }
    });
