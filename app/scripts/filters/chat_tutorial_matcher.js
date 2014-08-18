angular.module('customFilters', []).
  filter('search', function () {
    return function (input, searchNr) {
      if (input == searchNr) {
        return input;
      } else {
        return undefined;
      }
    };
  });