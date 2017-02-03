angular.module('starter.controllers', [])

.controller('BooksListCtrl', function($scope,_Books,author) {
  _Books.setBookList($scope);
  $scope.author = {name:  author};
})

.controller('BookCtrl', function($scope,  $stateParams, _Books) {
  _Books.setBook($stateParams.id, $scope);
})



