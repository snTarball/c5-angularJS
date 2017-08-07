(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.myMenu = "";
  $scope.myMessage = "";
  var styleRed = {"color":"#FF0000"};
  var styleGreen = {"color":"#00FF00"};

  $scope.showMessage = function () {
    var count = 0;
    if ($scope.myMenu.length > 0) {
      // If there is some text, count the items separated by commas
      var arrMenu = $scope.myMenu.split(',');
      arrMenu.forEach(function(item) {
        // We only increment the counter if the item is not empty
        if (item.trim().length > 0) {
          count++;
        }
      });
    }
    if (count == 0) {
      $scope.myMessage = "Please enter data first";
      $scope.myStyle = styleRed;
    }
    else {
      $scope.myStyle = styleGreen;
      if (count <= 3) {
        $scope.myMessage = "Enjoy!";
      }
      else {
        $scope.myMessage = "Too much!";
      }
    }
  };

}

})();
