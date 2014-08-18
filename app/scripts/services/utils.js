'use strict';

app.factory('Utils', ['$translate', '$rootScope', '$timeout', function($translate, $rootScope, $timeout) {

  var utils = {
    language: null,
    videoPlaying: false,

    setLanguage: function(countryCode) {
      $translate.use(countryCode);
      utils.language = countryCode;
      $rootScope.language = countryCode;
    },

//    Service to block double clicking video
    blockDoubleVideo: function (){
      utils.videoPlaying = true;
      $timeout(function (){
        utils.videoPlaying = false;
      }, 1000);
    }
  };

  //init
  utils.setLanguage('de');

  return utils;
}]);