var app = angular.module('feedme', ['ui.router']);

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
            url: "/order/food",
            templateUrl: "./assets/views/form/food.html"
        })
        .state('order.address', {
            url: "/order/address",
            templateUrl: "./assets/views/form/address.html"
        })
        .state('order.finish', {
            url: "/order/finish",
            templateUrl: "./assets/views/form/overview.html"
        });
});