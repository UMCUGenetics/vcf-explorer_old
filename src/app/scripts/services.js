'use strict';

var services = angular.module('vcfExplorerServices', ['ngResource']);

services.service('CouchDB', function($resource, appConfig){
  var couchdbViews = $resource(appConfig.couchdbURL + '/' + appConfig.couchdbDatabase + '/_design/:design/_view/:view');
  var couchdbDocs = $resource(appConfig.couchdbURL + '/' + appConfig.couchdbDatabase + '/:doc');

  this.getSamples = function() {
    return couchdbViews.get({'design':'default','view':'samples'});
  };

  this.getSampleVars = function(sampleKey) {
    return couchdbViews.get({'design':'default','view':'sample_vars','key':'"'+sampleKey+'"'});
  };

  this.getRun = function(runKey) {
    return couchdbDocs.get({'doc':runKey});
  };

});
