var app=angular.module("app",[]);
//app.config(function ($routeProvider){
//   $routeProvider.when('/',{
//       templateUrl:'/home.html',
//       controller:'homeController'
//   }).when('/exchangerate',{
//       templateUrl: 'pages/exchangerate.html',
//       controller:'exchangeController'
//   }) .when('/about',{
//       templateUrl: 'pages/about.html',
//       controller: 'aboutController'
//   });
//});
//app.controller("homeController",function($scope){
//   console.log("Naresh home") ;
//});
//app.controller("aboutController",function($scope){
//   console.log("About test") ;
//});
//var note={  id:123,
//            name:"note1",
//            content:"contect"};
// 
//        app.filter('stripdashes', function () {
//    // the function we are in returns
//    // the function below
//    return function(txt) {
//        return txt.split('-').join(' ');
//    };
//
//});
//app.controller("myctrl",function ($scope){
//   console.log("Test") ;
//   $scope.note1=note;
//   $scope.wname="Naresj-Test";
//});
//app.factory('addnoteserivce',function($http){
//    var noteservices={};
//    noteservices.addnote=function(note){
//        var promise=$http({method: 'POST', url: '/addnotes', data: note});
//        return promise;
//    };
//    return noteservices;
//});
//
//app.controller("addnotesctrl",function ($scope,addnoteserivce){
//    $scope.addnote=function(){
//        var note={id:$scope.note.id,
//                   name:$scope.note.name,
//                   content:$scope.note.content};
//      var promise=addnoteserivce.addnote(note)  ;
//    };
//});

//app.factory('getrateservice',function($http){
//   var rateservice={};
//  rateservice.getrate=function (ratedata){
//       console.log("Getting rate data");
//      var promise=$http(
//              {method:'POST',
//                 url:'/getrate',
//                 data:ratedata
//             }
//             );
//        return promise;
//  };
//    return rateservice;
//});
//app.controller("exchangeController",function($scope){
//    console.log("Getting rate");
//    var ratedata={fromCurrency:$scope.fromCurrency,
//                  toCurrency:$scope.toCurrency};
//   var promise=getrateservice.getrate(ratedata);
//});
app.controller('exchangeController', ['$http', function($http) {
var self = this;
self.items = [];
self.ratedata = {};

self.getrate = function() {
$http.post('/getrate', self.ratedata)
.then(function(response) {
self.rate=response.data;
console.log(self.rate);
});
};
}]);