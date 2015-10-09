app.controller('mainController',['$scope','$route',function($scope,$route){
  $scope.name = 'Jassim';
  $scope.$route = $route;

}]);


//Home Controller
app.controller('homeController',['$scope',function($scope){

  $scope.slides = [
    {
      image : 'Temporary Image 1',
      caption : 'Temporary Caption 1',
      detail : 'Temporary Description 1'
    },
    {
      image : 'Temporary Image 2',
      caption : 'Temporary Caption 2',
      detail : 'Temporary Description 2'
    }
  ];

  // $scope.slider =  slider.showSlider(slides);
 $scope.test = "Hello Dad";


}]);


//Slider Controler

app.controller('sliderController',['$scope',function($scope){

  // $scope.slides = $scope.$parent.slides;


}]);
