/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Addmovies = require('./addMovies.model');

exports.register = function(socket) {
  Addmovies.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Addmovies.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('addMovies:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('addMovies:remove', doc);
}