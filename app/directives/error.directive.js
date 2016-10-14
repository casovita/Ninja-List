(function () {
    'use strict'
    //Catch Routing Errors
    /**
     * @desc Error directive catch routing errors and show some message
     * @example <error></error>
     */
    angular.module('NinjaApp').directive('error', function ($rootScope) {
        return {
            restrict: 'E',
            template: '<div style:"color:red" ng-show="isError">$routeChangeError</div>',
            link: function (scope) {
                $rootScope.$on("$routeChangeError", function () {
                    scope.isError = true;
                })
            }
        }
    });
})();
