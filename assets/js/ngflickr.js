var ngFlickrApp = angular.module('ngFlickrApp', [
  'ngRoute',
  'ngFlickrControllers'
]);


ngFlickrApp.config(['$routeProvider',
  function($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'SetDetailCtrl',
          templateUrl: 'templates/photoset.html'
        })
        // .when('/photoset/:setID', {
        //   controller: 'SetDetailCtrl',
        //   templateUrl: 'templates/photoset.html'
        // })
        .otherwise({
          redirectTo: '/'
      });
  }]);
