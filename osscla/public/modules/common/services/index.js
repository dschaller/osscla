/**
 * This module requires all common services.
 *
 * It mainly provides a convenient way to import all common services by only
 * requiring a dependency on a single module.
 *
 */
'use strict';

var angular = require('angular');

var MODULE_NAME = 'osscla.common.services';

angular.module(MODULE_NAME, [
    // Keep this list sorted alphabetically!
    require('./Cla)',
    require('./NavService'),
    require('./Organization'),
    require('./Signature'),
    require('./UserInfo')
]);

module.exports = MODULE_NAME;
