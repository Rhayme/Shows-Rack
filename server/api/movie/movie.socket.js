/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Movie = require('./movie.model');

exports.register = function(socket) {
  Movie.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Movie.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('movie:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('movie:remove', doc);
}