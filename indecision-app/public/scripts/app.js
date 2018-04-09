"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: "printName",
        value: function printName() {
            console.log(this.name);
        }
    }, {
        key: "printAge",
        value: function printAge() {
            console.log(this.age);
        }
    }, {
        key: "getDescription",
        value: function getDescription() {
            return "His name is: ${this.name} and he is ${this.age} year(s) old";
        }
    }]);

    return Person;
}();

var p = new Person("Jai", 20);
console.log(p);
p.printName();
p.printAge();

var q = new Person("Deepak", 22);
console.log(q);
q.printName();
q.printAge();

console.log(p.getDescription());
