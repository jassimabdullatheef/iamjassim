app.directive('sliderTemplate',function(){
  return{
    templateUrl: '../partials/slider.html',
    restrict: 'E',
    scope: {},
    controller: ['$scope',function($scope){
      $scope.slides = $scope.$parent.slides;
      $scope.test = 'Hello';
      $scope.active = 0;
      $scope.slideActive = function(id){
        $scope.active = id;
      };
    }]
  };
});
