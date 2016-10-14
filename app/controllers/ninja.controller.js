(function () {
    'use strict'
    //Main Controller
    angular.module('NinjaApp').controller('NinjaController', NinjaController);
    'use strict'

    NinjaController.$inject = ['$http'];

    function NinjaController($http) {
        var vm = this;
        vm.removeNinja = removeNinja;
        vm.addNinja = addNinja;
        vm.removeAll = removeAll;

        active();

        function removeNinja(ninja) {
            var removedNinja = vm.ninjas.indexOf(ninja);
            vm.ninjas.splice(removedNinja, 1);
        };

        function addNinja() {
            vm.ninjas.push({
                name: vm.newNinja.name,
                belt: vm.newNinja.belt,
                rate: parseInt(vm.newNinja.rate),
                thumb: "http://loremflickr.com/75/75/face",
                avalibale: true
            });
            vm.newNinja = {};
        };

        function removeAll() {
            vm.ninjas = [];
        };

        function active() {
            if (vm.ninjas == undefined) {
                $http.get('data/ninjas.json').success(function (data) {
                    vm.ninjas = data;
                });
            }
        };

    };


})();
