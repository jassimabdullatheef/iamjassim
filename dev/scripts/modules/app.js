var app = angular.module('iamjassim',['ngRoute']);

app.controller('mainController',['$scope','$route',function($scope,$route){
  $scope.name = 'Jassim';
  $scope.$route = $route;

}]);
