angular.module('tempApp', [])
  .controller('TempCtrl', ['$scope', function($scope) {
      $scope.calcTemp = function (temp) {
        console.log(temp);
        var cel = ((temp - 32) * 5 / 9);
        console.log(cel);
      $scope.cel = cel.toFixed(2);
      };
  }]);


