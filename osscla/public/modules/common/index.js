'use strict';

var angular = require('angular');

var MODULE_NAME = 'osscla.common';

angular.module(MODULE_NAME, [
    require('./services'),
    require('./controllers')
]);

module.exports = MODULE_NAME;
