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
      caption : 'Branding',
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
  $scope.sliderAutoPlay = true;
  $scope.sliderInterval = 5000;
  // $scope.slider =  slider.showSlider(slides);
}]);


// Works Controller
app.controller('workController',['$scope',function($scope){
  $scope.works = [
    {
      caption : 'Fudbuddy',
      cat : 'branding',
      catName : 'Branding',
      thumbnail : 'asset/images/works/fudbuddy-logo.jpg'
    },
    {
      caption : 'Fudbuddy Website',
      cat : 'website',
      catName : 'Website',
      thumbnail : 'asset/images/works/fudbuddy-website.jpeg'
    },
    {
      caption : 'Fudbuddy',
      cat : 'branding',
      catName : 'Branding',
      thumbnail : 'asset/images/works/fudbuddy-logo.jpg'
    },
    {
      caption : 'Fudbuddy Website',
      cat : 'website',
      catName : 'Website',
      thumbnail : 'asset/images/works/fudbuddy-website.jpeg'
    },
    {
      caption : 'Fudbuddy',
      cat : 'branding',
      catName : 'Branding',
      thumbnail : 'asset/images/works/fudbuddy-logo.jpg'
    },
    {
      caption : 'Fudbuddy Website',
      cat : 'website',
      catName : 'Website',
      thumbnail : 'asset/images/works/fudbuddy-website.jpeg'
    },
    {
      caption : 'Fudbuddy',
      cat : 'branding',
      catName : 'Branding',
      thumbnail : 'asset/images/works/fudbuddy-logo.jpg'
    },
    {
      caption : 'Fudbuddy Website',
      cat : 'website',
      catName : 'Website',
      thumbnail : 'asset/images/works/fudbuddy-website.jpeg'
    }
  ];
  //Grid Width
  $scope.$watch(
    function(){return $('.work-thumbnail').css('width');},
    function(){
      $scope.gridWidth = $('.work-thumbnail').css('width');
      // console.log($scope.gridWidth);
      //console.log($('.work-thumbnail').width());
    }
  );

}]);
