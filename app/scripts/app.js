'use strict';

angular.module('ngApp', [
  'ngCookies',
  'ngGrid',
  'ngResource',
  'ngSanitize',
  'ngRoute'
    
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/grid.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
