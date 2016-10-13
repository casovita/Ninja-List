var app = angular.module('NinjaApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    // Before App Runs
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'NinjaController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .when('/contact-success', {
            templateUrl: 'views/contact-success.html',
            controller: 'ContactController'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
        }).otherwise({
            redirectTo: '/home'
        });

}]);

//app.run(function(){
////   When App Runs
//    
//    
//});

app.directive('randomNinja', [function () {
    return {
        restrict: 'E',
        scope: {
            ninjas: '=',
            title: '='
        },
        templateUrl: 'views/random.html',
        transclude: true,
        replace: true,
        controller: function ($scope) {
            $scope.random = Math.floor(Math.random() * 4);
        }
    }
}]);
//Catch Routing Errors
app.directive('error', function ($rootScope) {
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
//Main Controller
app.controller('NinjaController', ['$scope', '$http', function ($scope, $http) {
    'use strict'
    $scope.removeNinja = function (ninja) {
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);
    };

    $scope.addNinja = function () {
        $scope.ninjas.push({
            name: $scope.newNinja.name,
            belt: $scope.newNinja.belt,
            rate: parseInt($scope.newNinja.rate),
            thumb: "http://loremflickr.com/75/75/face",
            avalibale: true
        });
        $scope.newNinja = {};
    };

    $http.get('data/ninjas.json').success(function (data) {
        $scope.ninjas = data;
    });

    $scope.removeAll = function () {
        $scope.ninjas = [];
    };

}]);

app.controller('ContactController', ['$scope', '$location', function ($scope, $location) {
    'use strict'
    $scope.sendMessage = function () {
        $location.path('/contact-success');
    };
}]);
