var app=angular.module("iamjassim",["ngRoute"]);app.controller("mainController",["$scope","$route",function(e,o){e.name="Jassim",e.$route=o}]),app.config(["$routeProvider",function(e){e.when("",{templateUrl:"partials/home.html",controller:"homeController",activeTab:"home"}).when("/works",{templateUrl:"partials/works.html",controller:"mainController",activeTab:"works"}).when("/me",{templateUrl:"partials/me.html",controller:"mainController",activeTab:"me"}).when("/connect",{templateUrl:"partials/connect.html",controller:"mainController",activeTab:"connect"}).otherwise({templateUrl:"partials/home.html",controller:"mainController",activeTab:"home"})}]),app.controller("sliderController",["$scope",function(e){}]),app.controller("homeController",["$scope",function(e){}]);




