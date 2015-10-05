var app = angular.module('iamjassim',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
  // var pages = JSON.parse(pageJson);
  $routeProvider
    .when('',{
      templateUrl : 'partials/home.html',
      controller : 'mainController'
    })
    .when('/works',{
      templateUrl : 'partials/works.html',
      controller : 'mainController'
    })
    .when('/me',{
      templateUrl : 'partials/me.html',
      controller : 'mainController'
    })
    .when('/connect',{
      templateUrl : 'partials/connect.html',
      controller : 'mainController'
    })
    .otherwise({
      templateUrl : 'partials/home.html',
      controller : 'mainController'
    });

}]);

app.controller('mainController',['$scope',function($scope){
  $scope.name = 'Jassim';

  
}]);
