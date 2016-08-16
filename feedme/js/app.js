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
            templateUrl: './assets/views/main.html',
            controller: 'mainCtrl'
        })
        
        .state('order', {
            abstract: true,
            url: '/order',
            templateUrl: "./assets/views/order.html",
            controller: 'orderCtrl'
        })
        .state('order.food', {
            url: '',
            templateUrl: "./assets/views/form/food.html"
        })
        .state('order.address', {
            templateUrl: "./assets/views/form/details.html"
        })
        .state('order.finish', {
            templateUrl: "./assets/views/form/overview.html"
        })
        
        .state('success', {
            templateUrl: './assets/views/success.html',
            params: {
                name: ''
            },
            controller: function ($scope, $stateParams) {
                $scope.name = $stateParams.name;
            }
        });
});

app.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});





// .state('order', {
//     url: '/order',
//     controller: 'orderCtrl',
//     views: {
//         '@': {
//             templateUrl: './assets/views/order.html'
//         },
//         'food@order': {
//             templateUrl: "./assets/views/form/food.html"
//         },
//         'details@order': {
//             templateUrl: "./assets/views/form/details.html"
//         },
//         'overview@order': {
//             templateUrl: "./assets/views/form/overview.html"
//         }
//     }
// })