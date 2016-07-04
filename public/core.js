// public/core.js
var emmValues = angular.module('emmValues', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all valuess and show them
    $http.get('/api/values')
        .success(function(data) {
            $scope.values = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

  // when submitting the add form, send the text to the node API
    $scope.createValue = function() {
        $http.post('/api/values', $scope.formData)
            .success(function(data) {
              alert("hello");
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.values = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.add = function() {
        $http.post('/api/values', $scope.formData)
            .success(function(data) {
              alert("hello");
           var num1=document.getElementById("num1").innerHTML;
            var num2=document.getElementById("num2").innerHTML;
            var result=document.getElementById("result").innerHTML;
            num1+num2=result;
             $scope.formData = {}; // clear the form so our user is ready to enter another
             $scope.values = data;
             alert(result);
             console.log(result);
         })
        .error(function(data) {
             console.log('Error: ' + data);
         });  };
  // $scope.add = function(){
    //   alert("add function");
      //var add=document.getElementById("add").innerHTML;
      //var sub=document.getElementById("sub").innerHTML;
      //var mult=document.getElementById("mult").innerHTML;
      //var div=document.getElementById("div").innerHTML;
      //var num1=document.getElementById("num1").innerHTML;
      //var num2=document.getElementById("num2").innerHTML;
      //num1+num2=result;
      //console.log(result);
      //alert("maths function");
      //if(num1.isEmpty()){
      //alert("fields are empty");
       //}
//}

}
