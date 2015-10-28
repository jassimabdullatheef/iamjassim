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
    // console.log(workServices.activeThumbs);
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
app.controller('workController',['$scope','$routeParams','$location', 'workServices', 'Works',function($scope, $routeParams, $location, workServices, Works){
  $scope.works = Works.query();
  var worksArray = Works.query();
  $scope.url = $routeParams.url;
  $scope.infoActive = false;
  var workArray = function(url){
    for(var i =0; i< $scope.works.length; i++){
      if($scope.works[i].url == url){
        return $scope.works[i];
      }
    }
  };

  $scope.go = function (path) {
    $location.path(path);
    // console.log(path);
    $scope.infoActive = false;
  };
  // $scope.work = workArray($scope.url);
  $scope.work =  worksArray;
  // console.log(worksArray);

  $scope.showInfo = function(){
    $scope.infoActive = ($scope.infoActive === true)?false:true;
  };


  $scope.isActive = function(cat){
    return workServices.activeThumbs.indexOf(cat)>=0?true:false;

  };

}]);

app.controller('meController',['$scope',function($scope){
  $scope.jobs = [
    {
      title : 'Web Specialist and Operations Officer',
      company : 'Delmon Group of Companies',
      place : 'Dammam, Saudi Arabia',
      From : 'Nov, 2013',
      To : 'Present',
      descr : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      title : 'Full Stack Designer and Developer',
      company : 'Freelance',
      place : 'Dammam, Saudi Arabia',
      From : 'Sep, 2013',
      To : 'Present',
      descr : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      title : 'Web Designer and Developer',
      company : 'Count2infinity',
      place : 'Kerala, India',
      From : 'Mar, 2013',
      To : 'Sep, 2013',
      descr : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      title : 'Social Interactive Media Advicer',
      company : '[24/7] Inc.',
      place : 'Banglore, India',
      From : 'Oct, 2012',
      To : 'Feb, 2013',
      descr : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];
  $scope.courses = [
    {
      name : 'Bachelor of Computer Apllication',
      school : 'Mahatma Gandhi University',
      place : 'Kerala, India',
      From : '2008',
      To : '2011',
      descr : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name : 'CCNA',
      school : 'B.Soft',
      place : 'Cochin, India',
      From : 'May, 2012',
      To : '',
      descr : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name : 'MCITP',
      school : 'B.Soft',
      place : 'Cochin, India',
      From : 'May, 2012',
      To : '',
      descr : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];
  $scope.skills = [
    {
      name : 'HTML',
      percentage : 100
    },
    {
      name : 'CSS',
      percentage : 95
    },
    {
      name : 'Javascript',
      percentage : 80
    },
    {
      name : 'jQuery',
      percentage : 90
    },
    {
      name : 'Angular.JS',
      percentage : 70
    },
    {
      name : 'Node.JS',
      percentage : 40
    },
    {
      name : 'Gulp.JS',
      percentage : 60
    },
    {
      name : 'Wordpress',
      percentage : 80
    },
    {
      name : 'PHP',
      percentage : 30
    },
    {
      name : 'MySQL',
      percentage : 30
    },
    {
      name : 'SEO',
      percentage : 35
    },
    {
      name : 'Adobe Photoshop',
      percentage : 95
    },
    {
      name : 'Adobe Illustrator',
      percentage : 70
    },
    {
      name : 'Sketch',
      percentage : 100
    }
  ];
}]);
