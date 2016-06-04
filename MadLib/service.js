var app = angular.module('MadLib');

//services must have a return, but the only thing visible to the rest of the application are the keys of what is returned.
app.factory("myService", fucntion(){
  var words = {};


  return {
      saveData : function(wordStorageObject){
        words = wordStorageObject;
      },
      getData : function(){
        return {
          words;
        }
      }
  }
});
