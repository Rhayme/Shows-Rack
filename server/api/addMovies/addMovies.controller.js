'use strict';

var _ = require('lodash');
var Addmovies = require('./addMovies.model');

// Get list of addMoviess
exports.index = function(req, res) {
  Addmovies.find(function (err, addMoviess) {
    if(err) { return handleError(res, err); }
    return res.json(200, addMoviess);
  });
};

// Get a single addMovies
exports.show = function(req, res) {
  Addmovies.findById(req.params.id, function (err, addMovies) {
    if(err) { return handleError(res, err); }
    if(!addMovies) { return res.send(404); }
    return res.json(addMovies);
  });
};

// Creates a new addMovies in the DB.
exports.create = function(req, res) {
  Addmovies.create(req.body, function(err, addMovies) {
    if(err) { return handleError(res, err); }
    return res.json(201, addMovies);
  });
};

// Updates an existing addMovies in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Addmovies.findById(req.params.id, function (err, addMovies) {
    if (err) { return handleError(res, err); }
    if(!addMovies) { return res.send(404); }
    var updated = _.merge(addMovies, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, addMovies);
    });
  });
};

// Deletes a addMovies from the DB.
exports.destroy = function(req, res) {
  Addmovies.findById(req.params.id, function (err, addMovies) {
    if(err) { return handleError(res, err); }
    if(!addMovies) { return res.send(404); }
    addMovies.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}