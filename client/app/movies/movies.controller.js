'use strict';

angular.module('showsRackApp')
  .controller('MoviesCtrl', function ($scope, $http, movieGetter) {
      $scope.movies = movieGetter;
      $scope.saveMovie = function () {
          $http.post("/api/movies", $scope.newMovie)
            .success(function (response) {
                $scope.movies.push(response);
            })
      };
  });
