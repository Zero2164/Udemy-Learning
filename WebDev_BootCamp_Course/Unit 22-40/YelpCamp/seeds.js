
const mongoose = require('mongoose'),
    CampGround = require('./models/CampGround.js'),
    Comment = require('./models/comment.js'),
    data = [
        {
            name: 'Clouds Rest',
            img: "https://images.unsplash.com/photo-1582699368204-2c5d89dc8e78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit cupiditate ipsum sunt eos odio ducimus amet iusto ipsam, autem quisquam placeat assumenda obcaecati natus, harum, earum vero? Quidem, nesciunt."
        },
        {
            name: 'Campers Respite',
            img: "https://images.unsplash.com/photo-1525878993011-66db66b46484?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit cupiditate ipsum sunt eos odio ducimus amet iusto ipsam, autem quisquam placeat assumenda obcaecati natus, harum, earum vero? Quidem, nesciunt."
        },
        {
            name: 'Hollow Creek',
            img: "https://images.unsplash.com/photo-1511523797961-8e5e11a48b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit cupiditate ipsum sunt eos odio ducimus amet iusto ipsam, autem quisquam placeat assumenda obcaecati natus, harum, earum vero? Quidem, nesciunt."
        },
        {
            name: 'Flower Peak',
            img: "https://images.unsplash.com/photo-1530488562579-7c1dd2e6667b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit cupiditate ipsum sunt eos odio ducimus amet iusto ipsam, autem quisquam placeat assumenda obcaecati natus, harum, earum vero? Quidem, nesciunt."
        }
    ];



function seedDB() {
    //remove all campgrounds
    CampGround.remove({}, function (err) {
        // if (err) {
        //     console.log(err);
        // }
        // //add 3 campgrounds from data array
        // data.forEach(function (seed) {
        //     CampGround.create(seed, function (err, cmpground) {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             //create a comment on each campground
        //             Comment.create({
        //                 text: "This place is great, but I wish there was internet!",
        //                 author: "Bilbo"
        //             }, function (err, comment) {
        //                 if(err) {
        //                    console.log(err); 
        //                 } else {
        //                     cmpground.comments.push(comment);
        //                     cmpground.save();
        //                 };
        //             });
        //         };
        //     });
        // });
    });

};

module.exports = seedDB;