'use strict';

var angular = require('angular');

var MODULE_NAME = 'osscla.common.controllers';

angular.module(MODULE_NAME, [
    // Keep this list sorted alphabetically!
    require('./CCLACtrl'),
    require('./MainCtrl'),
    require('./NavCtrl'),
    require('./SignatureCtrl'),
    require('./SignClaCtrl')
]);

module.exports = MODULE_NAME;
