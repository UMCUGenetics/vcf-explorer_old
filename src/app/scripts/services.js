'use strict';

var services = angular.module('vcfExplorerServices', ['ngResource']);

services.service('CouchDB', function($resource, appConfig){
  var couchdbViews = $resource(appConfig.couchdbURL + '/' + appConfig.couchdbDatabase + '/_design/:design/_view/:view?stale=update_after');
  var couchdbDocs = $resource(appConfig.couchdbURL + '/' + appConfig.couchdbDatabase + '/:doc?stale=update_after');

  this.getSamples = function() {
    return couchdbViews.get({'design':'default','view':'samples'});
  };

  this.getSampleVars = function(sampleKey) {
    return couchdbViews.get({'design':'default','view':'sample_vars','key':'"'+sampleKey+'"'});
  };

  this.getRuns = function() {
    return couchdbViews.get({'design':'default','view':'runs'});
  };

  this.getRun = function(runKey) {
    return couchdbDocs.get({'doc':runKey});
  };

});
