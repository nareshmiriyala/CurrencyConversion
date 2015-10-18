/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('conversionApp', [
  'ngRoute','chart.js'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "pages/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "pages/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "pages/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "pages/pricing.html", controller: "PageCtrl"})
    .when("/exchangerate", {templateUrl: "pages/exchangerate.html", controller: "exchangeController"})
    .when("/ratechart", {templateUrl: "pages/ratechart.html", controller: "rateController"})
    .when("/services", {templateUrl: "pages/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "pages/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "pages/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "pages/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "pages/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

app.controller('exchangeController', ['$http', function($http) {
var self = this;
self.items = [];
self.rateResp = {};

self.getrate = function() {
console.log("Rate Data:"+self.rate)
$http.post('/getrate', self.rate)
.then(function(response) {
self.rateResp=response.data;
console.log(self.rateResp);
});
};
}]);
app.controller('rateController', ['$http', function($http) {
var self = this;
self.items = [];
self.rateResp = {};

self.getrate = function() {
console.log("Rate History input:"+self.rate.startdate)
$http.post('/gethistory',self.rate)
.then(function(response) {
self.rateResp=response.data;
console.log(self.rateResp);
console.log(self.rateResp[0].to)
var lab=[];
var dat=[];
var dat1=[];
var dat2=[];
 for(var par in self.rateResp){
 lab.push(self.rateResp[par].to);
 dat1.push(self.rateResp[par].rate);
 dat2.push(self.rateResp[par].rate);
 }
 dat.push(dat1);
 dat.push(dat2);
 self.labels =lab;
 console.log(lab);
  self.series = ['Series A', 'Series B'];
  self.data = dat;
  console.log(self.data);
  self.onClick = function (points, evt) {
    console.log("values"+points, evt);
  };
});
};

}]);