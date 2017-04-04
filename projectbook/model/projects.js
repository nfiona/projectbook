'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectsSchema = new Schema({
  category: "string",
  title: "string",
  cover_img: "string",
  description: "string",
  url: "string"
});

module.exports = mongoose.model('Project', ProjectsSchema);
