app.controller('mainController',['$scope','$route','workServices',function($scope,$route,workServices){
  $scope.name = 'Jassim';
  $scope.$route = $route;
  $scope.filterView = function(cat){
    if(cat==='all'){
      workServices.activeThumbs = workServices.allThumbs.slice();
    }
    else{
      // if(workServices.activeThumbs.indexOf(cat)>=0){
      //   var index = workServices.activeThumbs.indexOf(cat);
      //   delete workServices.activeThumbs[index];
      //
      // }
      // else{
      //   workServices.activeThumbs.push(cat);
      // }
      workServices.activeThumbs = [cat].slice();
    }
    console.log(workServices.activeThumbs);
  };
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
app.controller('workController',['$scope','workServices',function($scope, workServices){
  $scope.works = [
    {
      caption : 'Devious Angel',
      cat : 'others',
      catName : 'Banner Design',
      color : '#7A7BC7',
      thumbnail : 'asset/images/works/devious-angel-thumb.jpg'
    },{
      caption : 'Profile Card',
      cat : 'others',
      catName : 'UI Design',
      color : '#b9c8d0',
      thumbnail : 'asset/images/works/profile-UI.jpg'
    },{
      caption : 'Delmon Group of Companies',
      cat : 'website',
      catName : 'Website Design & Development',
      color : '#4084D7',
      thumbnail : 'asset/images/works/delmon-thumb.jpg'
    },
    {
      caption : 'Fudbuddy',
      cat : 'branding',
      catName : 'Brand Identity Design',
      color : '#1AA994',
      thumbnail : 'asset/images/works/fudbuddy-logo.jpg'
    },
    {
      caption : 'Movie Card',
      cat : 'others',
      catName : 'UI Design',
      color : '#EA4B25',
      thumbnail : 'asset/images/works/Movie-poster-UI.jpg'
    },
    {
      caption : 'Fahmi Rumiah',
      cat : 'branding',
      catName : 'Brand Identity Design',
      color : '#AA5585',
      thumbnail : 'asset/images/works/fahmi-thumb.jpg'
    },
    {
      caption : 'Boost',
      cat : 'branding',
      catName : 'Brand Identity Design',
      color : '#302837',
      thumbnail : 'asset/images/works/boost-thumb.jpg'
    },
    {
      caption : 'Mobile Signin',
      cat : 'others',
      catName : 'UI Design',
      color : '#5F96DC',
      thumbnail : 'asset/images/works/Journal-Signin-UI-thumb.jpg'
    },
    {
      caption : 'Fudbuddy',
      cat : 'website',
      catName : 'Website Design',
      color : '#CABC29',
      thumbnail : 'asset/images/works/fudbuddy-website.jpeg'
    },
    {
      caption : 'AlQudwa',
      cat : 'branding',
      catName : 'Brand Identity Design',
      color : '#C1A141',
      thumbnail : 'asset/images/works/alqudwa-thumb.jpg'
    },
    {
      caption : 'Abu Abdul Aziz Studio & Labs',
      cat : 'website',
      catName : 'Website Design & Development',
      color : '#1A4071',
      thumbnail : 'asset/images/works/asl-thumb.jpg'
    },
    {
      caption : 'Loyal IT Solutions',
      cat : 'branding',
      catName : 'Brand Identity Design',
      color : '#0C70BB',
      thumbnail : 'asset/images/works/loyal-thumb.jpg'
    },
    {
      caption : 'Breaking News',
      cat : 'branding',
      catName : 'Brand Identity Design',
      color : '#87ACB2',
      thumbnail : 'asset/images/works/Breaking-news-thumb.jpg'
    },
    {
      caption : 'My Personal Portfolio',
      cat : 'website',
      catName : 'Website Design',
      color : '#A3B488',
      thumbnail : 'asset/images/works/iamjassimv2-thumb.jpg'
    },
    {
      caption : 'Krishna Plywoods',
      cat : 'website',
      catName : 'Website Design',
      color : '#E28C43',
      thumbnail : 'asset/images/works/krishna-thumb.jpg'
    },
    {
      caption : 'Aryas Group',
      cat : 'branding',
      catName : 'Brand Identity Design',
      color : '#239BBA',
      thumbnail : 'asset/images/works/aryas-thumb.jpg'
    },
    {
      caption : 'Holymatha Overseas',
      cat : 'website',
      catName : 'Website Design',
      color : '#87CDE4',
      thumbnail : 'asset/images/works/holymatha-thumb.jpg'
    },
    {
      caption : 'Minion',
      cat : 'others',
      catName : 'Photoshop Painting',
      color : '#F9D563',
      thumbnail : 'asset/images/works/minion-thumb.jpg'
    }
  ];
  $scope.isActive = function(cat){
    return workServices.activeThumbs.indexOf(cat)>=0?true:false;

  };

}]);
