var wowCodeApp = angular.module('wowCodeApp'
,[
  'ngRoute'
])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/olar', {
        templateUrl: 'olar.html'
      }).
      otherwise({
        redirectTo: 'cade.html'
      });
  }]);
