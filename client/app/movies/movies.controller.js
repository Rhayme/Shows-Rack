'use strict';

angular.module('showsRackApp')
  .controller('MoviesCtrl', function ($scope, $http) {
    
      $scope.newMovie = {};
      $scope.saveMovie = function () {
          $http.post("/api/movies", $scope.newMovie)
            .success(function (response) {
                alert("Movie was added")
                $scope.newMovie = {};
               
            })
      };
      $scope.searchmovies = function () {
          

          $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/', {
              params: {
                  apikey: 'bkxhfp5q5gehtezknjek5xer',
                  callback: 'JSON_CALLBACK',
                  q: $scope.movieName
              }
          })
          .success(function (data) {
              console.log('The data is ', data);
             $scope.possibleMovies = data;
          });

        
      }
      $scope.getPoster = function (thumbnail) {
          return thumbnail.replace("_tmb", "_ori");
          

      }
      $scope.selectMovie = function (movie) {
          $scope.newMovie.title = movie.title;
          $scope.newMovie.yearmade = movie.year;
          $scope.newMovie.description = movie.synopsis;
          $scope.newMovie.rating = movie.ratings.audience_score;
          $scope.newMovie.link = movie.links.alternate;
          $scope.newMovie.imageUrl = movie.posters.original.replace("_tmb", "_ori");
          
          console.dir(movie)
          
      }
     
  });


