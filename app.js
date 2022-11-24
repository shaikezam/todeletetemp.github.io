var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
	

    $routeProvider
    .when('/main', {
        templateUrl: 'main.html',
        controller: 'mainController'
    })  
    .when('/second', {
        templateUrl: 'second.html',
        controller: 'secondController'
    })
});

myApp.controller('mainController', ['$scope', function($scope) {
  $scope.name = "world"

}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {


}]);