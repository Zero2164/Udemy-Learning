//Require Mongoose
const mongoose = require('mongoose');


//POST Model - title, content
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model('Post', postSchema);