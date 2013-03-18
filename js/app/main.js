// Copyright 2013 Arunjit Singh. All Rights Reserved.

/**
 * @fileoverview The main script.
 *
 * @author Arunjit Singh <arunjit@me.com>
 */

'use strict';

angular.module('main', ['controllers']).
    config(['$interpolateProvider', function($interpolateProvider) {
      $interpolateProvider.startSymbol('[[');
      $interpolateProvider.endSymbol(']]');
    }]);
