var mongoose = require('mongoose');
var TaskSchema = new mongoose.Schema({
    author: String,
    userId: Number,
    title: String,
    description: String,
    copmleted: Boolean,
    created_at: Date,    
    updated_at: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model('Task', TaskSchema);