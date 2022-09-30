const http = require('https'),
    hostname = '192.168.20.4',
    port = 3000,
    mongoose = require('mongoose');

const Post = require('../models/post.js');
const User = require('../models/user.js');

mongoose.connect("mongodb://localhost/blog_demo_2", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to BlogDemo DB!'))
    .catch(error => console.log(error.message));




// User.create({
//     email: 'bob@gmail.com',
//     name: 'Bob Belcher'
// });

Post.create({
    title: "How to cook the best burger pt4",
    content: "Giberish!"
}, function(err, post) {
    User.findOne({email: "bob@gmail.com"}, function (err, foundUser) {
        if(err) {
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data) {
                if(err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            })
        };
    });
});

//FIND USER
//FIND ALL POSTS FOR THAT USER
// User.findOne({email: 'bob@gmail.com'}).populate('posts').exec(function (err, user ) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

