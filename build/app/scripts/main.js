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
      detail : 'I design and develop static and dynamic websites with focus on what the end user needs. I\'m always following the trend to produce more appealing results.'
    },
    {
      id : 1,
      image : 'asset/images/Logo-Design.png',
      caption : 'Branding',
      detail : 'Brand identity is one of the most crucial element of a business. I design brand identities that can express and represent the values of business.'
    },
    {
      id : 2,
      image : 'asset/images/UI-Designing.png',
      caption : 'UI/UX Designing',
      detail : 'I design user interfaces with better user experience in mind. I follow empathetic approach to determine the best ways to design interactions and experiences.'
    },
    {
      id : 3,
      image : 'asset/images/cms-development.png',
      caption : 'Frontend & CMS Development',
      detail : 'I develop Wordpress themes as per client requirements. I do Front end web development implementing better interactivity and flow.'
    
    }
  ];
  $scope.sliderAutoPlay = true;
  $scope.sliderInterval = 10000;
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
      title : 'Freelance Designer and Developer',
      company : 'Freelance',
      place : 'Dammam, Saudi Arabia',
      From : 'Sep, 2013',
      To : 'Present',
      descr : 'As a freelance designer and developer, I am providing wide scale of services like Web Designing, Frontend Development ,CMS Development, Basic SEO, Icon Design, Responsive Designs ,UI Designing, UX Designing, Branding, Print Designing, Domain Registration and Hosting'
    },{
      title : 'Web Specialist and Operations Officer',
      company : 'Delmon Group of Companies',
      place : 'Dammam, Saudi Arabia',
      From : 'Nov, 2013',
      To : 'Present',
      descr : 'I designed and developed the corporate website for Delmon Group of Companies. I manage the CMS website and all social media accounts for the company. I have also developed small scale apps for internal purposes. I am providing Desktop and Networking Support as well. Apart from these, I am also assisting Group operations, Office Administrations, and HR Management.'
    },{
      title : 'Web Designer and Developer',
      company : 'Count2infinity',
      place : 'Kerala, India',
      From : 'Mar, 2013',
      To : 'Sep, 2013',
      descr : 'In Count2Infinity, I have done Web Designing, Brand Identity Designing, Print Designing and Basic SEO.'
    },{
      title : 'Social Interactive Media Advicer',
      company : '[24/7] Inc.',
      place : 'Banglore, India',
      From : 'Oct, 2012',
      To : 'Feb, 2013',
      descr : 'in [24/7] Inc. I worked as customer support agent for online shopping giant Sears.com'
    }
  ];
  $scope.courses = [
    {
      name : 'Bachelor of Computer Application',
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

app.controller('connectController',['$scope',function($scope){
  $scope.activeForm = 'email';
  $scope.rows = 1;

  $scope.textareaChange = function(){
    // var height = $("#message").prop('scrollHeight');
    // $("#message").css('height',height);
    // console.log($("#message").prop('scrollHeight'));
    // var textarea = $("#message");
    // line-height is something like '12px', we need the number
    var lineHeight = Number($("#message").css('line-height').split(/\D/)[0]);
    var newHeight = Number($("#message").prop('scrollHeight'));
    var currentHeight = Number($("#message").prop('clientHeight'));

    // if (newHeight > currentHeight) {
      $("#message").css('overflow', 'hidden'); // prevent scrollbar appearance
      // $("#message").css('height', Number(currentHeight)  + Number(lineHeight.split(/\D/)[0]) + 'px');
      $("#message").css('height', newHeight  + 'px');
      // console.log(Number($("#message").prop('clientHeight')));
      // console.log('Current Height' + Number(currentHeight)  + ' New Height' + Number(newHeight) +  ' Line Height' +  Number(lineHeight));
    // }

  };
  $scope.goToForm = function(form){
      $scope.activeForm = form;
  };
  $scope.submitForm = function(){
    var name = $scope.visitorName;
    var emailId = $scope.visitorEmail;
    var message  = $scope.visitorMessage;

    console.log(name + ' ' + emailId +' '+ message);
  };
}]);



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


app.service('workServices',function(){

  return {
    allThumbs : ['website','branding','others'],
    activeThumbs : ['website','branding','others']
  };

});

app.factory('Works',['$resource',
  function($resource){
    return  $resource('scripts/works.json',{},{
      query: {method:'GET', params:{url:''}, isArray:true}
    });
}]);

