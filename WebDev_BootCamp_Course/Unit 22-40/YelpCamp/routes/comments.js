const express = require('express'),
    router = express.Router({ mergeParams: true }),
    CampGround = require('../models/CampGround'),
    Comment = require('../models/comment'),
    middleware = require('../middleware');



//CREATE NEW COMMENT / LOGIC
router.post('/', middleware.isLoggedIn, function (req, res) {
    //lookup campground ID
    CampGround.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log(err);
            res.redirect('/campgrounds');
        } else {
            Comment.create(req.body.comment, function (err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    //add Username and ID to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    //save comment
                    comment.save();
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect('/campgrounds/' + campground._id);
                };
            });
        };
    });
});

//COMMENT EDIT ROUTE
router.get('/:comment_id/edit', middleware.checkCommentOwnership, function (req, res) {
    CampGround.findById(req.params.id, function(err, foundCampground) {
        if(err || !foundCampground) {
            req.flash("error", "Campground not found.");
            return res.redirect('back');
        }
        Comment.findById(req.params.comment_id, function (err, foundComment) {
            if (err) {
                res.redirect('back');
            } else {
                res.render('comments/edit', { campground_id: req.params.id, comment: foundComment });
            };
        });
    });
});



//COMMENT UPDATE ROUTE
router.put('/:comment_id', middleware.checkCommentOwnership, function (req, res) {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function (err, updatedComment) {
        if (err) {
            res.redirect('back');
        } else {
            res.redirect('/campgrounds/' + req.params.id);
        };
    });
});

//COMMENT DESTROY ROUTE
router.delete('/:comment_id', middleware.checkCommentOwnership, function (req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function (err) {
        if (err) {
            res.redirect('back');
        } else {
            req.flash("warning", "Comment Deleted.");
            res.redirect('/campgrounds/' + req.params.id);
        };
    });
});

router.get('/back', function(req, res) {
    res.redirect('back');
})

//Export Routes to main app.js file
module.exports = router;
