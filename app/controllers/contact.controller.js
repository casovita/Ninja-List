(function () {
    'use strict'
    angular.module('NinjaApp').controller('ContactController', ContactController);

    ContactController.$inject = ['$location'];

    function ContactController($location) {
        var vm = this;
        vm.sendMessage = sendMessage;

        function sendMessage() {
            $location.path('/contact-success');
        };
    };

})();
