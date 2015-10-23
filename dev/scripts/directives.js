// Slider Directive
app.directive('sliderTemplate',function(){
  return{
    templateUrl: '../partials/slider.html',
    restrict: 'E',
    scope: {},
    controller: ['$scope',function($scope){
      $scope.slides = $scope.$parent.slides;
      $scope.active = 0;
      $scope.autoplay = $scope.$parent.sliderAutoPlay;
      $scope.autoplayTime = $scope.$parent.sliderInterval;
      $scope.slideActive = function(id){
        $scope.active = id;
      };
      if($scope.autoplay){
        setInterval(function(){
          if($scope.active < $scope.slides.length -1){
            $scope.$apply(function(){ $scope.slideActive($scope.active+1); });
          }else{
            $scope.$apply(function(){ $scope.slideActive(0); });
          }
        },$scope.autoplayTime);
      }
    }]
  };
});

// Background Image Directive
app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});
