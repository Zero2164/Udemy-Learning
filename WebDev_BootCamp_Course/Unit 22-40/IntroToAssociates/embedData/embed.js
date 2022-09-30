const http = require('https'),
    hostname = '192.168.20.4',
    port = 3000,
    mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/blog_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to BlogDemo DB!'))
    .catch(error => console.log(error.message));


//POST - title, content
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});
const Post = mongoose.model('Post', postSchema);



//USER - email, name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
const User = mongoose.model('User', userSchema);


//Demonstration Code Along:

//NEW USER CREATE + ADDING POSTS
// const newUser = new User({
//     email: 'hermione@hogwarts.edu',
//     name: 'Hermione'
// });

// newUser.posts.push({
//     title: 'Hogwarts',
//     content: 'So many things to study!'
// });

// newUser.save(function(err, user) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     };
// });

//NEW POST CREATE
// const newPost = new Post({
//     title: 'Thoughts on human flesh',
//     content: 'It is delicious!'
// });
// newPost.save(function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//FINDING USER IN DATABASE
User.findOne({ name: 'Hermione' }, function (err, user) {
    if (err) {
        console.log('===============================================================');
        console.log('ERROR!_:(');
        console.log('===============================================================');
        console.log(err);
        console.log('===============================================================');
    } else {
        user.posts.push({
            title: 'What I would like to do:',
            content: 'Have bigger tities!'
        });
        user.save(function (err, user) {
            if (err) {
                console.log('===============================================================');
                console.log('ERROR!_:(');
                console.log('===============================================================');
                console.log(err);
                console.log('===============================================================');
            } else {
                console.log('===============================================================');
                console.log('Found User!');
                console.log('===============================================================');
                console.log(user);
                console.log('===============================================================');
            };
        });
    };
});
