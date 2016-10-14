(function () {
    'use strict'
    angular.module('NinjaApp').config(configure);
    // Before App Runs

    configure.$inject = ['$routeProvider', '$locationProvider'];

    function configure($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/home', {
                templateUrl: 'app/views/home.html',
                controller: 'NinjaController',
                controllerAs: 'vm'
            })
            .when('/contact', {
                templateUrl: 'app/views/contact.html',
                controller: 'ContactController',
                controllerAs: 'vm'
            })
            .when('/contact-success', {
                templateUrl: 'app/views/contact-success.html',
                controller: 'ContactController',
                controllerAs: 'vm'
            })
            .when('/directory', {
                templateUrl: 'app/views/directory.html',
                controller: 'NinjaController',
                controllerAs: 'vm'
            }).otherwise({
                redirectTo: '/home'
            });
    };

})();
