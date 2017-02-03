
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  

  .state('booksList', {
    url: '/books',
    templateUrl: 'templates/bookList.html',
    controller: 'BooksListCtrl'
   
  })
  .state('book', {
    url: '/books/:id',
    templateUrl: 'templates/book.html',
    controller: 'BookCtrl'
   
  })

  $urlRouterProvider.otherwise('/books');

});
