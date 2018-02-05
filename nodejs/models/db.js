var mongoose = require('mongoose');
var TaskSchema = new mongoose.Schema({
    author: String,
    userId: Number,
    title: String,
    description: String,
    copmleted: Boolean,    
    published_date: String,
    updated_date: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model('Task', TaskSchema);