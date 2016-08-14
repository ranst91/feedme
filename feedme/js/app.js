var app = angular.module('feedme', ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            template: '<main ng-controller="mainCtrl"></main>'
        }).
        when('/order', {
            template: '<order ng-controller="orderCtrl"></order>'
        })}
        ]);

app.directive('main', function () {
    return {
        templateUrl: './assets/views/menu.html',
    }
});
app.directive('order', function () {
    return {
        templateUrl: './assets/views/order.html',
    }
});