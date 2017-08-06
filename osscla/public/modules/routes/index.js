/**
 * This module requires all routes.
 *
 * The main app depends on this module, which provides a convenient way to
 * import all routes. Each route module in turn depends on the module or
 * modules that contain its controllers, services and directives.
 *
 * Be sure to add your route module below when adding new pages.
 */
'use strict';

var angular = require('angular');

var MODULE_NAME = 'osscla.routes';

angular.module(MODULE_NAME, [
    // Keep this list alphabetized!
    require('angular-ui-router'),
    require('../common')
])

.config([
    '$urlRouterProvider',
    '$stateProvider',
    function($urlRouterProvider, $stateProvider) {
        // default url
        $urlRouterProvider.otherwise('/signature');

        var mainState = {
            name: 'main',
            url: '/signature',
            views: {
                main: {
                    controller: 'common.MainCtrl',
                    templateUrl: 'modules/common/views/main.html'
                }
            },
            data: {
                viewLocation: 'signature'
            }
        }

        var signClaState = {
            name: 'sign',
            url: '/signature/sign',
            views: {
                main: {
                    controller: 'common.SignClaCtrl',
                    templateUrl: 'modules/common/views/sign-cla.html'
                },
            },
            data: {
                viewLocation: 'signature',
            }
        }

        var addClaState = {
            name: 'add',
            url: '/signature/add',
            views: {
                main: {
                    controller: 'common.CCLACtrl',
                    templateUrl: 'modules/common/views/add-signature.html'
                },
            },
            data: {
                viewLocation: 'signatureList',
            }
        }

        var listSignaturesState = {
            name: 'list',
            url: '/signature_list',
            views: {
                main: {
                    controller: 'common.SignatureCtrl',
                    templateUrl: 'modules/common/views/signatures.html'
                }
            },
            data: {
                viewLocation: 'signatureList'
            }
        }

        $stateProvider.state(mainState);
        $stateProvider.state(signClaState);
        $stateProvider.state(addClaState);
        $stateProvider.state(listSignaturesState);
    }
]);

module.exports = MODULE_NAME;
