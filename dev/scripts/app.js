var app = angular.module('iamjassim',['ngRoute','ngAnimate','ngResource']);

angular.bootstrap(document.getElementById('app-root'), ['iamjassim'], {debugInfoEnabled: true});



app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  // var pages = JSON.parse(pageJson);
  $routeProvider
    .when('',{
      templateUrl : 'partials/home.html',
      controller : 'homeController',
      activeTab : 'home'
    })
    .when('/works',{
      templateUrl : 'partials/works.html',
      controller : 'workController',
      activeTab : 'works'
    })
    .when('/works/:url',{
      templateUrl : 'partials/work-single.html',
      controller : 'workController',
      activeTab : ''
    })
    .when('/me',{
      templateUrl : 'partials/me.html',
      controller : 'meController',
      activeTab : 'me'
    })
    .when('/me/career',{
      templateUrl : 'partials/career.html',
      controller : 'meController',
      activeTab : 'me'
    })
    .when('/me/education',{
      templateUrl : 'partials/education.html',
      controller : 'meController',
      activeTab : 'me'
    })
    .when('/me/skills',{
      templateUrl : 'partials/skills.html',
      controller : 'meController',
      activeTab : 'me'
    })
    .when('/connect',{
      templateUrl : 'partials/connect.html',
      controller : 'connectController',
      activeTab : 'connect'
    })
    .otherwise({
      templateUrl : 'partials/home.html',
      controller : 'mainController',
      activeTab : 'home'
    });

}]);

// app.get(function(req, res) {
//     res.sendfile(__dirname + 'index.html');
// });
