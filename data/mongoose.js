var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog');

var blogSchema = new mongoose.Schema({
	content: {type: String, unique:true},
	date: String
}, {collection: 'post'});

var post = mongoose.model('post', blogSchema);

module.exports =  post;