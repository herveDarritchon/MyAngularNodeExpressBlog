'use strict';

/* App Module */

var devHeureApp = angular.module('devHeureApp', [
  'devHeureControllers'
  ]);

devHeureApp.config(['$routeProvider',
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
  }]);

/* =================================================================================================== */

'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);

/* =================================================================================================== */

'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index',
        controller: IndexCtrl
      }).
      when('/addPost', {
        templateUrl: 'partials/addPost',
        controller: AddPostCtrl
      }).
      when('/readPost/:id', {
        templateUrl: 'partials/readPost',
        controller: ReadPostCtrl
      }).
      when('/editPost/:id', {
        templateUrl: 'partials/editPost',
        controller: EditPostCtrl
      }).
      when('/deletePost/:id', {
        templateUrl: 'partials/deletePost',
        controller: DeletePostCtrl
      }).
      when('/stub/sessions', {
        templateUrl: '/stub/stdResponse.json',
        controller: GetSessionCtrl
      }).      
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);