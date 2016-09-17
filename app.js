(function  () {

angular.module('myFirstApp', [])
.controller('MyFirstController', function($scope) {
$scope.countMenu= function() {
  document.getElementById('welcomeDiv').style.display = "block";


if($scope.name!=undefined)
{

var ab =  $scope.name.split(',');
console.log(ab.length);
 if (ab.length>3) {
   $scope.message="Too much";

}

else {
  $scope.message="Enjoy";
}
}
else
{
  $scope.message="Please enter data first";
}

};

});


})();
