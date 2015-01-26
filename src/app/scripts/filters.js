'use strict';

var filters = angular.module('vcfExplorerFilters', []);

filters.filter('varFilter',
  function() {
    return function(items, minGQ, minDP) {
      var filtered = [];
      angular.forEach(items, function(item) {
        if( item.value.data.GQ >= minGQ && item.value.data.DP >= minDP) {
          filtered.push(item);
        }
      });
      return filtered;
    };
  }
);
