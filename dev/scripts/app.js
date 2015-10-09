var app = angular.module('iamjassim',['ngRoute']);




app.config(['$routeProvider',function($routeProvider){
  // var pages = JSON.parse(pageJson);
  $routeProvider
    .when('',{
      templateUrl : 'partials/home.html',
      controller : 'homeController',
      activeTab : 'home'
    })
    .when('/works',{
      templateUrl : 'partials/works.html',
      controller : 'mainController',
      activeTab : 'works'
    })
    .when('/me',{
      templateUrl : 'partials/me.html',
      controller : 'mainController',
      activeTab : 'me'
    })
    .when('/connect',{
      templateUrl : 'partials/connect.html',
      controller : 'mainController',
      activeTab : 'connect'
    })
    .otherwise({
      templateUrl : 'partials/home.html',
      controller : 'mainController',
      activeTab : 'home'
    });

}]);