'use strict';

angular.module('showsRackApp')
  .controller('LandingCtrl', function ($scope, $http, movieGetter) {
    
      $scope.movies = movieGetter;

         
  });

function CarouselDemoCtrl($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.possibleMovies = [];
    $scope.addSlide = function () {
        var newWidth = 600 + slides.length;
        slides.push({
            image: 'http://api.rottentomatoes.com/api/public/v1.0/movies/' + newWidth + '/400',
           

        });


    };
    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }

    $scope.getPoster = function (thumbnail) {
        return thumbnail.replace("_tmb", "_ori");


    }
}

