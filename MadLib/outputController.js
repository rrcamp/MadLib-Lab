//this is the controller for the output that will be in the display
var app = angular.module('app');

app controller('outputControl', function($scope, myService){
  $scope.displayTheWord = myService.getData();

});
