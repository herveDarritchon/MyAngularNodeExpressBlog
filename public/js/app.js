'use strict';

/* App Module */

var devHeureApp = angular.module('devHeureApp', [
  'ngRoute',
  'devHeureControllers',
  'services'
  ]);

/*devHeureApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/sessions', {
        templateUrl: 'partials/session-list.html',
        controller: 'SessionListCtrl'
      }).
      when('/session/:sessionId', {
        templateUrl: 'partials/session-detail.html',
        controller: 'SessionDetailCtrl'
      }).
      otherwise({
        redirectTo: '/jade'
      });
  }]);*/