'use strict';

/* Controllers */

var devHeureControllers = angular.module('devHeureControllers', []);

devHeureControllers.controller('SessionListCtrl', ['$scope','MyService' , function ($scope,MyService) {
	$scope.sessions = MyService.getSession();
}
]);