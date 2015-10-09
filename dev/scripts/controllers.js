app.controller('mainController',['$scope','$route',function($scope,$route){
  $scope.name = 'Jassim';
  $scope.$route = $route;

}]);


//Home Controller
app.controller('homeController',['$scope',function($scope){

  $scope.slides = [
    {
      id : 0,
      image : 'asset/images/responsive-website-designing.png',
      caption : 'Web Designing',
      detail : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut tellus eleifend, porta lorem eget, vestibulum mauris. Phasellus et volutpat leo'
    },
    {
      id : 1,
      image : 'asset/images/Logo-Design.png',
      caption : 'CMS Development',
      detail : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut tellus eleifend, porta lorem eget, vestibulum mauris. Phasellus et volutpat leo'
    },
    {
      id : 2,
      image : 'asset/images/cms-development.png',
      caption : 'CMS Development',
      detail : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut tellus eleifend, porta lorem eget, vestibulum mauris. Phasellus et volutpat leo'
    },
    {
      id : 3,
      image : 'asset/images/UI-Designing.png',
      caption : 'UI/UX Designing',
      detail : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut tellus eleifend, porta lorem eget, vestibulum mauris. Phasellus et volutpat leo'
    }
  ];

  // $scope.slider =  slider.showSlider(slides);



}]);


//Slider Controler

app.controller('sliderController',['$scope',function($scope){

  // $scope.slides = $scope.$parent.slides;


}]);
