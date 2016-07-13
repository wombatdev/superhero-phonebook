"use strict";

(function(){
    angular
        .module("phonebook", [])
        .controller("phonebookController", PhonebookController)

        function PhonebookController () {
            var vm = this;
            vm.data = superheroList;
            // vm.reveal = function (pic) {
            //     var pos = vm.data.map(function(e) { return e.name; }).indexOf(name);
            //     vm.pic = pic;
            // }
            vm.addHero = function (name, number, group, image) {
                var newhero = {
                    name: name,
                    number: number,
                    group: group,
                    img: image
                };
                vm.data.push(newhero);
            }
        }
})();
