angular.module('newApp').controller('mainCtrl', function($scope, dataService) {

  $scope.avengersArr = dataService.getData();


}); //end mainCtrl
