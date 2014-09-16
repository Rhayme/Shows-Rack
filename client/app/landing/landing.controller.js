'use strict';

angular.module('showsRackApp')
  .controller('LandingCtrl', function ($scope, $http, movieGetter) {
    
      $scope.movies = movieGetter;

         
  });

function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];
}






/*function CarouselDemoCtrl($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.possibleMovies = [];
    $scope.addSlide = function () {
        var newWidth = 600 + slides.length;
        slides.push({
            image: 'http://api.rottentomatoes.com/api/public/v1.0/movies/' + newWidth + '/300',

        });
    };
    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
}*/
