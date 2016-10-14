(function () {
    'use strict'
    /**
     * @desc Random Ninjas directive shows some random ninja from list of ninjas
     * @example  <random-ninja ninjas="some ninjas" title="'Random Ninja'"></random-ninja>
     */
    angular.module('NinjaApp').directive('randomNinja', [function () {
        return {
            restrict: 'E',
            scope: {
                ninjas: '=',
                title: '='
            },
            templateUrl: 'app/views/random.html',
            transclude: true,
            replace: true,
            controller: function ($scope) {
                $scope.random = Math.floor(Math.random() * 4);
            }
        }
}]);
})();
