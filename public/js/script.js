
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateurl : "page2.html"
    })
    .when("/tomato", {
        templateUrl : "page1.html"
    });
});