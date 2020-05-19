var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "page1.html"
    })
    .when("/page2", {
        templateUrl : "page2.html"
    })
});