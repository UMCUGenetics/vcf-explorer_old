'use strict';

/**
 * @ngdoc function
 * @name vcfExplorerApp.controller:SamplesCtrl
 * @description
 * # SamplesCtrl
 * Controller of the vcfExplorerApp
 */
var controllers = angular.module('vcfExplorerControllers', []);

controllers.controller('SamplesCtrl',
  function ($scope, CouchDB) {
    $scope.samples = CouchDB.getSamples();
  });

controllers.controller('SampleVarsCtrl',
  function ($scope, $routeParams, CouchDB) {
    $scope.sampleKey = $routeParams.sampleKey;
    $scope.variants = CouchDB.getSampleVars($scope.sampleKey);
    $scope.varLimit = 10;
  });

controllers.controller('Run',
  function ($scope, $routeParams, CouchDB) {
    $scope.runKey = $routeParams.runKey;
    $scope.runData = CouchDB.getRun($scope.runKey);
    $scope.varLimit = 10;
  });
