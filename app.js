(function () {
"use strict";

angular.module("myFirstApp", [])

.controller("MyFirstController", function ($scope) {
    $scope.name = "Eduard";
    $scope.sayHello = function () {
        return "Hello Coursera"
    }
});

})();