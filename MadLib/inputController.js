//this is the controller for the first page
var app = angular.module('Madlib');

app.controller('inputControl', function ($scope, myService, $location){

  $scope.getWord = function (words){
    //the word after scope has to match ng-click on the input.html page


    myService.saveData(words);
    $location.path('/display');
  };
});
