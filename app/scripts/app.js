'use strict';

/**
 * @ngdoc overview
 * @name fcoach2App
 * @description
 * # fcoach2App
 *
 * Main module of the application.
 */
var app = angular.module('fcoach2App', [
    'ionic',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'ui.router',
    'customFilters'
  ])

  .config(['$stateProvider', '$translateProvider', '$urlRouterProvider', function ($stateProvider, $translateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        abstract: true
      })
      .state('main.chats', {
        url: 'chats',
        templateUrl: 'views/chats.html'
      })
      .state('main.tutorials', {
        url: 'tutorials',
        templateUrl: 'views/tutorials.html'
      })
      .state('intro', {
        url: '/intro',
        templateUrl: 'views/intro.html',
        controller: 'IntroCtrl'
      })

    $urlRouterProvider.otherwise("/chats");

    // configures staticFilesLoader
    $translateProvider.useStaticFilesLoader({
      prefix: 'content/texts/translation-',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('de')

  }]);

var PhoneGapInit = function () {
  var initAngular = function () {
    angular.bootstrap(document, ['fcoach2App']);
  };

  if (!window.cordova) {
    initAngular();
  } else {
    document.addEventListener('deviceready', function () {
      initAngular();
    });
  }

};

angular.element(document).ready(function () {
  new PhoneGapInit();
});


//Phonegap init with FileSystem
//Not finished yet
//Finish this version for smoother video adding functionality
//First install those plugins
//org.apache.cordova.file
//org.apache.cordova.file - transfer
//
//var PhoneGapInit = function () {
//  alert("starting here");
//
//  var initAngular = function() {
//    angular.bootstrap(document, ['fcoach2App']);
//  };
//  var onSuccess = function (fileSystem) {
//    console.log('success', arguments);
//    console.log('path is', fileSystem.root.fullPath);
//    var ft = new FileTransfer();
//    var fileURL = "cdvfile://localhost/persistent/file.pdf";
//    var uri = encodeURI("http://www.w3.org/2011/web-apps-ws/papers/Nitobi.pdf");
//
//    ft.download(uri, fileURL,
//      function (entry) {
//        // You get the path to the file that
//        // you have to unzip
//        console.log("download complete: " + entry.fullPath);
//        console.log("entry", entry);
//      },
//      function (error) {
//        console.log("We are having an error in here", error);
//        console.log("download error source " + error.source);
//        console.log("download error target " + error.target);
//        console.log("upload error code" + error.code);
//      }
//    );
//  };
//  var onFail = function (error){
//    console.log("error", arguments)
//  };
//
//  if (!window.cordova) {
//    initAngular();
//  } else {
//    document.addEventListener('deviceready', function() {
////      if (localStorage.getItem("isVideoInstalled") === true) {
//        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onFail);
//
////      }
//      initAngular();
//    });
//  }
//
//};
//
//angular.element(document).ready(function() {
//  new PhoneGapInit();
//});
