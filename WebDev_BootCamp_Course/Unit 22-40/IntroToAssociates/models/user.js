//Require Mongoose
const mongoose = require('mongoose');

//USER Model - email, name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
});
module.exports = mongoose.model('User', userSchema);
