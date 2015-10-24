var app=angular.module("iamjassim",["ngRoute","ngAnimate"]);app.config(["$routeProvider",function(e){e.when("",{templateUrl:"partials/home.html",controller:"homeController",activeTab:"home"}).when("/works",{templateUrl:"partials/works.html",controller:"workController",activeTab:"works"}).when("/me",{templateUrl:"partials/me.html",controller:"mainController",activeTab:"me"}).when("/connect",{templateUrl:"partials/connect.html",controller:"mainController",activeTab:"connect"}).otherwise({templateUrl:"partials/home.html",controller:"mainController",activeTab:"home"})}]);
app.controller("mainController",["$scope","$route","workServices",function(e,t,a){e.name="Jassim",e.$route=t,e.filterView=function(e){"all"===e?a.activeThumbs=a.allThumbs.slice():a.activeThumbs=[e].slice(),console.log(a.activeThumbs)}}]),app.controller("homeController",["$scope",function(e){e.slides=[{id:0,image:"asset/images/responsive-website-designing.png",caption:"Web Designing",detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut tellus eleifend, porta lorem eget, vestibulum mauris. Phasellus et volutpat leo"},{id:1,image:"asset/images/Logo-Design.png",caption:"Branding",detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut tellus eleifend, porta lorem eget, vestibulum mauris. Phasellus et volutpat leo"},{id:2,image:"asset/images/cms-development.png",caption:"CMS Development",detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut tellus eleifend, porta lorem eget, vestibulum mauris. Phasellus et volutpat leo"},{id:3,image:"asset/images/UI-Designing.png",caption:"UI/UX Designing",detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut tellus eleifend, porta lorem eget, vestibulum mauris. Phasellus et volutpat leo"}],e.sliderAutoPlay=!0,e.sliderInterval=5e3}]),app.controller("workController",["$scope","workServices",function(e,t){e.works=[{caption:"Devious Angel",cat:"others",catName:"Banner Design",color:"#7A7BC7",thumbnail:"asset/images/works/devious-angel-thumb.jpg"},{caption:"Profile Card",cat:"others",catName:"UI Design",color:"#b9c8d0",thumbnail:"asset/images/works/profile-UI.jpg"},{caption:"Delmon Group of Companies",cat:"website",catName:"Website Design & Development",color:"#4084D7",thumbnail:"asset/images/works/delmon-thumb.jpg"},{caption:"Fudbuddy",cat:"branding",catName:"Brand Identity Design",color:"#1AA994",thumbnail:"asset/images/works/fudbuddy-logo.jpg"},{caption:"Movie Card",cat:"others",catName:"UI Design",color:"#EA4B25",thumbnail:"asset/images/works/Movie-poster-UI.jpg"},{caption:"Fahmi Rumiah",cat:"branding",catName:"Brand Identity Design",color:"#AA5585",thumbnail:"asset/images/works/fahmi-thumb.jpg"},{caption:"Boost",cat:"branding",catName:"Brand Identity Design",color:"#302837",thumbnail:"asset/images/works/boost-thumb.jpg"},{caption:"Mobile Signin",cat:"others",catName:"UI Design",color:"#5F96DC",thumbnail:"asset/images/works/Journal-Signin-UI-thumb.jpg"},{caption:"Fudbuddy",cat:"website",catName:"Website Design",color:"#CABC29",thumbnail:"asset/images/works/fudbuddy-website.jpeg"},{caption:"AlQudwa",cat:"branding",catName:"Brand Identity Design",color:"#C1A141",thumbnail:"asset/images/works/alqudwa-thumb.jpg"},{caption:"Abu Abdul Aziz Studio & Labs",cat:"website",catName:"Website Design & Development",color:"#1A4071",thumbnail:"asset/images/works/asl-thumb.jpg"},{caption:"Loyal IT Solutions",cat:"branding",catName:"Brand Identity Design",color:"#0C70BB",thumbnail:"asset/images/works/loyal-thumb.jpg"},{caption:"Breaking News",cat:"branding",catName:"Brand Identity Design",color:"#87ACB2",thumbnail:"asset/images/works/Breaking-news-thumb.jpg"},{caption:"My Personal Portfolio",cat:"website",catName:"Website Design",color:"#A3B488",thumbnail:"asset/images/works/iamjassimv2-thumb.jpg"},{caption:"Krishna Plywoods",cat:"website",catName:"Website Design",color:"#E28C43",thumbnail:"asset/images/works/krishna-thumb.jpg"},{caption:"Aryas Group",cat:"branding",catName:"Brand Identity Design",color:"#239BBA",thumbnail:"asset/images/works/aryas-thumb.jpg"},{caption:"Holymatha Overseas",cat:"website",catName:"Website Design",color:"#87CDE4",thumbnail:"asset/images/works/holymatha-thumb.jpg"},{caption:"Minion",cat:"others",catName:"Photoshop Painting",color:"#F9D563",thumbnail:"asset/images/works/minion-thumb.jpg"}],e.isActive=function(e){return t.activeThumbs.indexOf(e)>=0?!0:!1}}]);
app.directive("sliderTemplate",function(){return{templateUrl:"../partials/slider.html",restrict:"E",scope:{},controller:["$scope",function(e){e.slides=e.$parent.slides,e.active=0,e.autoplay=e.$parent.sliderAutoPlay,e.autoplayTime=e.$parent.sliderInterval,e.slideActive=function(t){e.active=t},e.autoplay&&setInterval(function(){e.active<e.slides.length-1?e.$apply(function(){e.slideActive(e.active+1)}):e.$apply(function(){e.slideActive(0)})},e.autoplayTime)}]}}),app.directive("backImg",function(){return function(e,t,i){var a=i.backImg;t.css({"background-image":"url("+a+")","background-size":"cover"})}});

app.service("workServices",function(){return{allThumbs:["website","branding","others"],activeThumbs:["website","branding","others"]}});
