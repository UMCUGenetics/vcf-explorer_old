'use strict';

var filters = angular.module('vcfExplorerFilters', []);

function filterRow(item, filterValues) {
  for(var index in filterValues){
    if( item.value.data[index] < filterValues[index] ){
      return true;
    }
  }
  return false;
}

filters.filter('varTableFilter',
  function() {
    return function(items, filterValues) {
      var filtered = [];
      angular.forEach(items, function(item) {
        if( ! filterRow(item, filterValues)){
          filtered.push(item);
        }
      });
      return filtered;
    };
  }
);
