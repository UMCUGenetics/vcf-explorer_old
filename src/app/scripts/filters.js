'use strict';

var filters = angular.module('vcfExplorerFilters', []);

function filterRow(item, filterValues) {
  for(var index in filterValues){
    if( item[index] < filterValues[index] ){
      return true;
    }
  }
  return false;
}

filters.filter('sampleVarTableFilter',
  function() {
    return function(items, filterValues) {
      var filtered = [];
      angular.forEach(items, function(item) {
        if( ! filterRow(item.value.data, filterValues)){
          filtered.push(item);
        }
      });
      return filtered;
    };
  }
);

filters.filter('runVarTableFilter',
  function() {
    return function(items, filterValues) {
      var filtered = [];
      angular.forEach(items, function(item) {
        if( ! filterRow(item.info, filterValues)){
          filtered.push(item);
        }
      });
      return filtered;
    };
  }
);
