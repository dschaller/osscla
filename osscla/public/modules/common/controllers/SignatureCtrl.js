'use strict';

var angular = require('angular');

var MODULE_NAME = 'osscla.common.controllers.SignatureCtrl';

angular.module(MODULE_NAME, [
    require('angular-resource'),
    require('angular-ui-bootstrap'),
    require('../services/Signature')
])

/*
 * Main controller
 */
.controller('common.SignatureCtrl', [
    '$scope',
    '$log',
    'common.Signatures',
    function ManageCertsCtrl($scope, $log, Signatures) {
        Signatures.get().$promise.then(function(signatures){
            $scope.signatures = signatures.signatures;
        });
    }
]);

module.exports = MODULE_NAME;
