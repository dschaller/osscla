'use strict';

var angular = require('angular');

var MODULE_NAME = 'osscla.common.services.NavService';

angular.module(MODULE_NAME, [])

.service('common.NavService', [
    '$rootScope',
    function($rootScope) {
        var _this = this;
        this.viewLocation = '';

        $rootScope.$on('$stateChangeSuccess', function(evt, state) {
            if(state.data) {
                _this.viewLocation = state.data.viewLocation;
            }
        });

        this.getViewLocation = function() {
            return _this.viewLocation;
        };

    }
]);

module.exports = MODULE_NAME;
