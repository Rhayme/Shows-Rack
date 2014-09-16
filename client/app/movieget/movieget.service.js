'use strict';

angular.module('showsRackApp')
  .service('movieget', function ($http, $q) {

                
      return {
          getmovies: function () {
              var deferred = $q.defer();
              $http.get("/api/movies").success(function (result) {
                  deferred.resolve(result);

              })
              return deferred.promise;

          }
      }

    // AngularJS will instantiate a singleton by calling "new" on this function
  });
