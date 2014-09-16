'use strict';

angular.module('showsRackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: 'app/landing/landing.html',
        controller: 'LandingCtrl',
        resolve: {
            movieGetter: function (movieget) {
                return movieget.getmovies();
            }
        }
      });
  });