/**
 * Created by common on 2016/3/24.
 */
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'baseControllers'
]);

phonecatApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/default', {
        templateUrl: 'partials/default.html',
        controller: 'cyCtrl'
    })
        .when('/order_sure', {
            templateUrl: 'partials/order_sure.html',
            controller: 'cyCtrl'
        })
        .when('/order_prepare', {
            templateUrl: 'partials/order_prepare.html',
            controller: 'cyCtrl'
        })
        .otherwise({redirectTo: '/default'})
}]);
