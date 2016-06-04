//this is the route configuration
var app = angular.module ('MadLib', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/controller1', {
    templateUrl: 'input.html',
    controller: 'inputControl'
  });
  $routeProvider.when('/controller2', {
    templateUrl: 'output.html',
    controller: 'outputControl'
  });
  $routeProvider.otherwise({
    redirectTo: '/404',
    templateUrl: '404.html'
    controller: 'failController'
  });
})


//service keeps the data for safe keeping, controller retrives the data, and scope puts the retrieved data somewhere on the page.
//scope can see and manipulate data in both the controller and the view
