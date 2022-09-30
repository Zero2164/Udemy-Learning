//MIDDLEWARE
const middlewareObj = {},
CampGround = require('../models/CampGround'),
Comment = require('../models/comment');

middlewareObj.checkOwnership = function (req, res, next) {
    //is user logged in
    if (req.isAuthenticated()) {
        CampGround.findById(req.params.id, function (err, editCampground) {
            if (err || !editCampground) {
                req.flash("error", "Campground not found.");
                res.redirect('back');
            } else {
                //if user is logged in, does the user own the campground?
                if (editCampground.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that.");
                    //otherwise redirect
                    res.redirect('back');
                };
            };
        });
    } else {
        //if not, redirect.
        res.redirect('back');
    };
};

middlewareObj.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error', 'You have to be logged in to do that.');
    res.redirect('/login');
};

middlewareObj.checkCommentOwnership = function (req, res, next) {
    //is user logged in
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function (err, foundComment) {
            if (err || !foundComment) {
                req.flash("error", "Comment not found.");
                res.redirect('back');
            } else {
                //if user is logged in, does the user own the campground?
                if (foundComment.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that.");
                    //otherwise redirect
                    res.redirect('back');
                };
            };
        });
    } else {
        //if not, redirect.
        req.flash("error", "You need to be logged in to do that.");
        res.redirect('back');
    };
};


module.exports = middlewareObj;