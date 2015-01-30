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
    $scope.varLimit = 25;
    $scope.minGQ = 0;
    $scope.minDP = 0;
});

controllers.controller('RunsCtrl',
  function ($scope, CouchDB) {
    $scope.runs = CouchDB.getRuns();
});

controllers.controller('RunCtrl',
  function ($scope, $routeParams, CouchDB) {
    $scope.runKey = $routeParams.runKey;
    $scope.runData = CouchDB.getRun($scope.runKey);
    $scope.varLimit = 25;
});
