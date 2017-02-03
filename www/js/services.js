angular.module('starter.services', [])
.constant("author","Admiral_Awesome")
.constant('urlBooks', "http://vanilla.dev.htmlcms.me/books")

.service('_Books', function($http, _Errors, urlBooks) {
    var bookList = [];
    var certainBook; 

    return {
      setBookList : function($scope) {
        $http.get(urlBooks).then(function(resp){
          console.log(resp)
          bookList = resp.data;
          $scope.books = {list : resp.data};
        },function (err ) {
          
          _Errors.inetConError();
         
        })
      },
      getCachedAll : function() {
        return bookList;
      },
      setBook : function(id, $scope) {
          if ( !id) {
            _Errors.missIdError();
            return;
          }
          $http.get(urlBooks+"/"+id).then(function(resp) {
              $scope.book = { value : resp.data[0]};
              certainBook = resp.data[0];
          }, function (err) {
             _Errors.inetConError();
          })
      },
      getCachedBook : function() {
        return certainBook;
      }
      
    }
})
.service('_Errors', function($location,$window,$ionicPopup) {
    
    function popUp(text, title, reload) {
      $ionicPopup.alert({
        title: title,
        template: '<b>' + text + '</b>',
         okText: 'OK'
      }).then(function() {
        if (reload) {
          $location.path('/books');
          $window.location.reload();
        }
      })
    }

    return {
      missIdError : function() {
        popUp("Tried to get book without id", "err : missIdError");
      },
      inetConError : function() {
        popUp("Internet connection error </br> (turn on internet and press (ok) </br> or the server can be down", "err : errCon", true);
      },
    }
});

