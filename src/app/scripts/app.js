'use strict';

/**
 * @ngdoc overview
 * @name vcfExplorerApp
 * @description
 * # vcfExplorerApp
 *
 * Main module of the application.
 */
var vcfExplorerApp = angular.module('vcfExplorerApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',

    'CornerCouch',
    'angularUtils.directives.dirPagination',

    'vcfExplorerApp.development',
    'vcfExplorerControllers',
    'vcfExplorerServices'
  ]);

vcfExplorerApp.config(
  function ($routeProvider) {
    $routeProvider
      .when('/samples', {
        templateUrl: 'views/samples.html',
        controller: 'SamplesCtrl'
      })
      .when('/sample_vars/:sampleKey', {
        templateUrl: 'views/sampleVars.html',
        controller: 'SampleVarsCtrl'
      })
      .when('/run/:runKey', {
        templateUrl: 'views/run.html',
        controller: 'Run'
      })
      .otherwise({
        redirectTo: '/samples'
      });
  });
