angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, $state, mainSrv){
  for(var i = 0; i < mainSrv.travelInfo.length; i++){
    if($state.params.id == mainSrv.travelInfo[i].id){
      $scope.book = mainSrv.travelInfo[i];
    }
  }
});
