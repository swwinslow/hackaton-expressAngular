<!DOCTYPE html>
<html lang="en-US">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js">
</script>
<body ng-app="myApp">

    <div ng-controller="myCtrl">
      <label><b>Username</b></label>
      <input type="text" placeholder="Enter Username" ng-model="username" name="username" required>

      <label><b>Password</b></label>
      <input type="password" placeholder="Enter Password" ng-model="password" name="password" required>

      <button ng-click="logon()">Login</button>
  </div>


  <script>
angular.module('myApp', [])
  .controller('myCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.count = 0;
    $scope.logon = function() {

      console.log($scope.username);
      console.log($scope.password);
      var data = {};

      if($scope.username == "seth@email.com"){
        var baseUrl = 'http://54.87.210.252/slim/public/index.php';
        var data =  $http({
                method: "POST",
                url: baseUrl + '/loginDoctorSeth',
                data: {
                    "email": "swwinslow@gmail.com",
                    "password": "passwordKaren"
                }
        });
      }

      console.log(data);
    };
  }s]);
</script>

</body>
</html>
