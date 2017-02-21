angular.module('quoteBook').controller('mainCtrl',function( $scope , dataService ){
  $scope.quotes = dataService.getQuotes()
  $scope.addData = function(quote) {
      dataService.addData(quote);
  }
  $scope.deleteQ = function(index){
    dataService.deleteQ(index)
  }
})
