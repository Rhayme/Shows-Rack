'use strict';

angular.module('showsRackApp')
  .controller('MoviesCtrl', function ($scope, $http) {

      $scope.saveMovie = function () {
          $http.post("/api/movies", $scope.newMovie)
            .success(function (response) {
                $scope.movies.push(response);
               
            })
      };
      $scope.searchmovies = function () {
          //$http.get('http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=' + $scope.movieName + //'&page_limit=10&page=1&apikey=bkxhfp5q5gehtezknjek5xer').success(function (res) {
            //  $scope.possibleMovies = res.movies;
          //})


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

      
  });


