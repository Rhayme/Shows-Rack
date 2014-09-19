'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MovieSchema = new Schema({
  title: String,
  description: String,
  rating:Number,
  yearmade: Number,
  link: String,
  imageUrl: String

});

module.exports = mongoose.model('Movie', MovieSchema);