/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('conversionApp', [
  'ngRoute','angular-loading-bar'
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
    .when("/videodownload", {templateUrl: "pages/videodownload.html", controller: "downloadCtrl"})
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
app.controller('downloadCtrl',['$http',function($http){
var self=this;
self.resp={};
self.downloadVideo=function(){
console.log("Download videoid:"+self.videoUrl);
$http.post('/downloadVideo',self.videoUrl)
.then(function(response){
self.resp=response.data;
console.log(self.resp);
});
}
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
createChart(response.data);
});
};
self.addrate=function(){
console.log("addrate called");
$http.post('/addrate',self.addedrate).then(
function(response){
self.message="Success";
},function(response){
self.message="Failure to add";
}
);
};

}]);
 var randomScalingFactor = function() {
            return Math.round(Math.random() * 100 * (Math.random() > 0.5 ? -1 : 1));
        };
        var randomColorFactor = function() {
            return Math.round(Math.random() * 255);
        };
        var randomColor = function(opacity) {
            return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
        };
function createChart(items){
 console.log("Item data:"+items);
 var dateList=[];
 var rateList=[];
 for( var par in items){
 var dateValue=moment(items[par].currentdate).format('MM/DD/YYYY');
 console.log("Date Value:"+dateValue);
 dateList.push(dateValue);
 rateList.push(items[par].rate);
 }
var config = {
            type: 'line',
            data: {
                labels: dateList,
                datasets: [{
                    label: "My First dataset",
                    data:rateList,
                    fill: false,
                    borderDash: [5, 5],
                }]
            },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Date'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Rate'
                        }
                    }]
                }
            }
        };

        $.each(config.data.datasets, function(i, dataset) {
            dataset.borderColor = randomColor(0.4);
            dataset.backgroundColor = randomColor(0.5);
            dataset.pointBorderColor = randomColor(0.7);
            dataset.pointBackgroundColor = randomColor(0.5);
            dataset.pointBorderWidth = 1;
        });

        console.log(config.data);
                    var ctx = document.getElementById("canvas").getContext("2d");
                    window.myLine = new Chart(ctx, config);
}