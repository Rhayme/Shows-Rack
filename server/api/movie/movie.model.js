'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MovieSchema = new Schema({
  title: String,
  genre: String,
  description: String,
  rating:Number,
  yearmake:Number
});

module.exports = mongoose.model('Movie', MovieSchema);