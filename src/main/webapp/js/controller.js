/**
 * Created by nareshm on 6/11/2015.
 */

var blogController = function (/* $scope, $location, $http */) {
    console.log("Blog Controller reporting for duty.");
};


var pageController = function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");

    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    })
};
var rateController = function ($http,ngDialog) {
    var self = this;
    self.items = [];
    self.rateResp = {};

    self.getrate = function () {
        console.log("Rate History input:" + self.rate.startdate)
        $http.post('/gethistory', self.rate)
            .then(function (response) {
                self.rateResp = response.data;
                console.log(self.rateResp);
                console.log(self.rateResp[0].to)
                createChart(response.data);
            });
    };
    self.clickToOpen=function () {
        console.log("called");
        ngDialog.open({ template: 'pages/addrate.html',className: 'ngdialog-theme-default'});
    };
    self.addrate = function () {
        console.log("addrate called");
        $http.post('/addrate', self.addedrate).then(
            function (response) {
                self.message = "Success";
            }, function (response) {
                self.message = "Failure to add";
            }
        );
    };

};


var exchangeController = function ($http) {
    var self = this;
    self.items = [];
    self.rateResp = {};

    self.getrate = function () {
        console.log("Rate Data:" + self.rate)
        $http.post('/getrate', self.rate)
            .then(function (response) {
                self.rateResp = response.data;
                console.log(self.rateResp);
            });
    };
};

var downloadController = function ($http) {
    var self = this;
    self.resp = {};

    self.downloadVideo = function () {
        console.log("Download videoid:" + self.videoUrl);
        self.downloadList = self.videoUrl;
        $http.post('/downloadVideo', self.videoUrl)
            .then(function (response) {
                self.resp = response.data;
                console.log(self.resp);
            });
    }
};