var app = angular.module('feedme', ['ui.router', 'ngMessages']);

app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: './assets/views/menu.html',
            controller: 'mainCtrl'
        })
        .state('order', {
            url: '/order',
            templateUrl: './assets/views/order.html',
            controller: 'orderCtrl'
        })
        .state('order.pizza', {
            url: '/order/',
            templateUrl: "./assets/views/form/food.html",
            parent: 'order'
        })
        .state('order.address', {
            url: '/order/',
            templateUrl: "./assets/views/form/address.html",
            parent: 'order'
        })
        .state('order.finish', {
            url: '/order/',
            templateUrl: "./assets/views/form/overview.html"
        });
});

app.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});