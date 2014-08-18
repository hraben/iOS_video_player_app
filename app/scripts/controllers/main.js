'use strict';

/**
 * @ngdoc function
 * @name fcoach2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fcoach2App
 */

app.controller('ModalCtrl', ['$scope', '$translate', '$location', '$timeout', '$state', 'Utils', function ($scope, $translate, $location, $timeout, $state, Utils){
    $scope.$on('modal.shown', function() {
      // Execute action
      $scope.language = Utils.language;
    });

  $scope.restartConfirmation = false;

  $scope.$on('modal.hidden', function () {
      $timeout(function (){
        $scope.restartConfirmation = false;
      }, 100);
    });

    $scope.clickFlag = function (countryCode) {
      Utils.setLanguage(countryCode);
      $scope.language = Utils.language;
      $timeout(function () {
        $scope.modal.hide();
      }, 300);
    };

    $scope.confirmRestart = function (){
      $timeout(function(){
        $scope.restartConfirmation = true;
      }, 300);
    };

    $scope.restartAsNewUser = function () {
//      saving stuff to SQL
      $scope.modal.hide();
      $state.go('intro');
    };

    $scope.cancelRestart = function () {
      $scope.modal.hide();
    }
  }])

  .controller('MainCtrl', ['$scope', '$timeout', '$translate', '$ionicModal', 'Utils', '$rootScope', '$state', '$ionicSlideBoxDelegate', function ($scope, $timeout, $translate, $ionicModal, Utils, $rootScope, $state, $ionicSlideBoxDelegate) {
    $scope.screen = 'chats';
    $scope.selectedChatId = 1;

    $scope.switchScreen = function (screen) {
      $scope.selectedChatId = 1;
      $scope.screen = screen;
      $state.go('main.' + screen);
    };

    $scope.openVideo = function(type, id) {
//      alert(type + " " + id);
      var lang = Utils.language;
      var path = "/www/content/videos/" + type + "s/" + type + "_" + lang + "_" + id + ".mp4";

      if (Utils.videoPlaying === false) {
        Utils.blockDoubleVideo();
        window.player.playRegular(path);
      } else {
        console.log('double click locked')
      }

      if (type === 'chat') {
        $timeout(function (){
          $scope.chats[id - 1]._watched = true
        }, 300);
      };
      if (type === 'tutorial') {
        $timeout(function () {
          $scope.tutorials[id - 1]._watched = true
        }, 300);
      }
    };

    $scope.slideToChat = function (id) {
      $ionicSlideBoxDelegate.slide(id - 1);
      $scope.selectedChatId = $ionicSlideBoxDelegate.currentIndex() + 1
    };

    $scope.slideChanged = function (index){
      $scope.selectedChatId = index + 1
    };


    $scope.selectedChat = function() {
      for (var i = 0; i < $scope.chats.length; i++) {
        if ($scope.chats[i]) {
          if ($scope.chats[i].id == $scope.selectedChatId) {
            return $scope.chats[i];
          }
        }
      }

      alert("Could not find chat with id #" + $scope.selectedChatId);
      return null;
    };

    $scope.selectChat = function(index) {
      $scope.selectedChatId = index;
    };

    $scope.findTutorialById = function(id) {
      for (var i = 0; i < $scope.tutorials.length; i++) {
        if ($scope.tutorials[i].id == id) {
          return $scope.tutorials[i];
        }
      }
      return null;
    };

    $scope.alertMessage = function (message) {
      window.alert(message)
    };

    $ionicModal.fromTemplateUrl('modal.html', function (modal) {
      $scope.modal = modal;
    }, {
      animation: 'slide-in-up'
    });



    $scope.chats = [
      {
        id: 1,
        duration: "18:10",
        relatedTutorials: true,
        _watched: false
      },
      {
        id: 2,
        duration: "6:45",
        relatedTutorials: true,
        _watched: false
      },
      {
        id: 3,
        duration: "10:25",
        relatedTutorials: true,
        _watched: false
      },
      {
        id: 4,
        duration: "7:35",
        relatedTutorials: true,
        _watched: false
      },
      {
        id: 5,
        duration: "16:30",
        relatedTutorials: true,
        _watched: false
      },
      {
        id: 6,
        duration: "13:10",
        relatedTutorials: true,
        _watched: false
      },
      {
        id: 7,
        duration: "9:05",
        relatedTutorials: true,
        _watched: false
      },
      {
        id: 8,
        duration: "4:35",
        relatedTutorials: true,
        _watched: false
      },
      {
        id: 9,
        duration: "7:15",
        relatedTutorials: true,
        _watched: false
      },
      {
        id: 10,
        duration: "7:55",
        relatedTutorials: false,
        _watched: false
      },
      {
        id: 11,
        duration: "5:40",
        relatedTutorials: false,
        _watched: false
      }
    ];

    $scope.tutorials = [
      {
        id: 1,
        duration: "10:40",
        group: 5,
        recommendedChat: 5,
        _watched: false
      },
      {
        id: 2,
        duration: "17:25",
        group: 1,
        recommendedChat: 2,
        _watched: false
      },
      {
        id: 3,
        duration: "6:45",
        group: 3,
        recommendedChat: 3,
        _watched: false
      },
      {
        id: 4,
        duration: "3:15",
        group: 1,
        recommendedChat: 1,
        _watched: false
      },
      {
        id: 5,
        duration: "20:45",
        group: 5,
        recommendedChat: 9,
        _watched: false
      },
      {
        id: 6,
        duration: "7:55",
        group: 4,
        recommendedChat: 8,
        _watched: false
      },
      {
        id: 7,
        duration: "10:20",
        group: 4,
        recommendedChat: 7,
        _watched: false
      },
      {
        id: 8,
        duration: "13:15",
        group: 3,
        recommendedChat: 4,
        _watched: false
      },
      {
        id: 9,
        duration: "5:25",
        group: 1,
        recommendedChat: 1,
        _watched: false
      },
      {
        id: 10,
        duration: "12:00",
        group: 5,
        recommendedChat: 8,
        _watched: false
      },
      {
        id: 11,
        duration: "5:00",
        group: 2,
        recommendedChat: 2,
        _watched: false
      },
      {
        id: 12,
        duration: "15:25",
        group: 4,
        recommendedChat: 6,
        _watched: false
      },
      {
        id: 13,
        duration: "5:45",
        group: 2,
        recommendedChat: 4,
        _watched: false
      },
      {
        id: 14,
        duration: "8:00",
        group: 3,
        recommendedChat: 5,
        _watched: false
      },
      {
        id: 15,
        duration: "3:10",
        group: 2,
        recommendedChat: 3,
        _watched: false
      },
      {
        id: 16,
        duration: "5:25",
        group: 6,
        recommendedChat: false,
        _watched: false
      },
      {
        id: 17,
        duration: "3:20",
        group: 6,
        recommendedChat: false,
        _watched: false
      }
    ];
  }])

  .controller('IntroCtrl', ['$scope', '$translate', '$state', '$ionicSlideBoxDelegate', 'Utils', '$timeout', function ($scope, $translate, $state, $ionicSlideBoxDelegate, Utils, $timeout) {

    $scope.introSeen = false;

    $scope.clickFlag = function (countryCode) {
      Utils.setLanguage(countryCode);
    };

    $scope.startApp = function () {
      $state.go('main.chats');
    };

    $scope.next = function () {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function () {
      $ionicSlideBoxDelegate.previous();
    };

    // Called each time the slide changes
    $scope.slideChanged = function (index) {
      $scope.slideIndex = index;
    };

    $scope.openWelcomeVideo = function() {
      var lang = Utils.language;
      var path = "/www/content/videos/intros/intro_" + lang + ".mp4";

//      Set intro video as seen
      $timeout(function () {
        $scope.introSeen = true;
      }, 300);

      if (Utils.videoPlaying === false){
        Utils.blockDoubleVideo();
        window.player.playRegular(path);
      } else {
        console.log('double click locked')
      }
    };
  }]);

