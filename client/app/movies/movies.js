'use strict';

angular.module('showsRackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('movies', {
        url: '/movie',
        templateUrl: 'app/movies/movies.html',
        controller: 'MoviesCtrl'
        
      });
  });