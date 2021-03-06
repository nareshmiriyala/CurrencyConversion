/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('conversionApp', [
    'ngRoute', 'angular-loading-bar','ngDialog'
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
// Example of how to set default values for all dialogs
app.config(['ngDialogProvider', function (ngDialogProvider) {
    ngDialogProvider.setDefaults({
        className: 'ngdialog-theme-default',
        plain: false,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
        appendTo: false,
        preCloseCallback: function () {
            console.log('default pre-close callback');
        }
    });
}]);
/**
 * Controls the Blog
 */
app.controller('BlogCtrl', blogController);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', pageController);

app.controller('exchangeController', ['$http', exchangeController]);

app.controller('downloadCtrl', ['$http', downloadController]);

app.controller('rateController', ['$http','ngDialog', rateController]);
var randomScalingFactor = function () {
    return Math.round(Math.random() * 100 * (Math.random() > 0.5 ? -1 : 1));
};
var randomColorFactor = function () {
    return Math.round(Math.random() * 255);
};
var randomColor = function (opacity) {
    return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
};
function createChart(items) {
    console.log("Item data:" + items);
    var dateList = [];
    var rateList = [];
    for (var par in items) {
        var dateValue = moment(items[par].currentdate).format('MM/DD/YYYY');
        console.log("Date Value:" + dateValue);
        dateList.push(dateValue);
        rateList.push(items[par].rate);
    }
    var config = {
        type: 'line',
        data: {
            labels: dateList,
            datasets: [
                {
                    label: "My First dataset",
                    data: rateList,
                    fill: false,
                    borderDash: [5, 5]
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                xAxes: [
                    {
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Date'
                        }
                    }
                ],
                yAxes: [
                    {
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Rate'
                        }
                    }
                ]
            }
        }
    };

    $.each(config.data.datasets, function (i, dataset) {
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