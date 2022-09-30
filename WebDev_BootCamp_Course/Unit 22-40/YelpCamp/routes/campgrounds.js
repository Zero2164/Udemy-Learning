const express = require('express'),
    router = express.Router(),
    CampGround = require('../models/CampGround'),
    Comment = require('../models/comment'),
    middleware = require('../middleware');

var NodeGeocoder = require('node-geocoder'),
    options = {
        provider: 'google',
        httpAdapter: 'https',
        apiKey: process.env.GEOCODER_API_KEY,
        formatter: null
    },
    geocoder = NodeGeocoder(options);
var noMatch;

//INDEX ROUTE - Show All CampGrounds
router.get('/', function (req, res) {
    noMatch = null;
    //Get all campgrounds from DB
    CampGround.find({}, function (err, allCmpGrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render('campgrounds/index', { cmpGrounds: allCmpGrounds, noMatch: noMatch });
        };
    });
});


//CREATE - Add new CampGround to DB
router.post('/', middleware.isLoggedIn, function (req, res) {
    //get data from form and add to cmpGrounds array
    var name = req.body.name,
        price = req.body.price,
        img = req.body.img,
        description = req.body.description,
        author = {
            id: req.user._id,
            username: req.user.username
        };
    geocoder.geocode(req.body.location, function (err, data) {
        if (err || !data.length) {
            console.log(err)
            req.flash('error', 'Invalid address');
            return false;
        }
        var lat = data[0].latitude,
            lng = data[0].longitude,
            location = data[0].formattedAddress,
            newCmpGround = { name: name, price: price, img: img, description: description, author: author, location: location, lat: lat, lng: lng };
        //Create a new campground and save to DB
        CampGround.create(newCmpGround, function (err, newlyCreatedcmpGRND) {
            if (err) {
                console.log(err);
            } else {
                console.log('===========================================');
                console.log('New Campground Added:');
                console.log(newlyCreatedcmpGRND.name);
                console.log('===========================================');
                //redirect back to /campgrounds page
                req.flash('success', 'New Campground Added Successfully.');
                res.redirect('/campgrounds');
            };
        });
    });

});

//NEW - Show form to create new CampGround
router.get('/new', middleware.isLoggedIn, function (req, res) {
    res.render('campgrounds/new');
});

//SHOW - Shows more info about one CampGround
router.get('/:id', function (req, res) {
    //find the campground with provided ID
    CampGround.findById(req.params.id).populate('comments').exec(function (err, foundCMPGRND) {
        if (err || !foundCMPGRND) {
            req.flash('error', 'Campground not found.');
            res.redirect('back');
        } else {
            //COMMENT EDIT LOGIC
            Comment.findById(req.params.comment_id, function (err, foundComment) {
                if (err) {
                    res.redirect('back');
                } else {
                    //render show template with that CampGround
                    res.render('campgrounds/show', { campground: foundCMPGRND, campground_id: req.params.id, comment: foundComment });
                };
            });
        };
    });


});

//EDIT CAMPGROUND ROUTE
router.get('/:id/edit', middleware.checkOwnership, function (req, res) {
    CampGround.findById(req.params.id, function (err, editCampground) {
        res.render('campgrounds/edit', { campground: editCampground });
    });
});

//UPDATE CAMPGROUND ROUTE
router.put('/:id', middleware.checkOwnership, function (req, res) {
    geocoder.geocode(req.body.location, function (err, data) {
        if (err || !data.length) {
            req.flash('error', 'Invalid address');
            return res.redirect('back');
        }
        req.body.campground.lat = data[0].latitude;
        req.body.campground.lng = data[0].longitude;
        req.body.campground.location = data[0].formattedAddress;
        //find and update the correct campground
        CampGround.findByIdAndUpdate(req.params.id, req.body.campground, function (err, updatedCampground) {
            if (err) {
                req.flash("error", err.message);
                res.redirect('/campgrounds');
            } else {
                req.flash("success", "Successfully Updated!");
                //redirect to back to that campgrounds show page
                res.redirect('/campgrounds/' + req.params.id);
            };
        });
    });
});
//SEARCH ROUTE
router.get('/campground/Srch', function (req, res) {
    noMatch = null;
    if (req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        //Search Campgrounds
        CampGround.find({ name: regex }, function (err, allCmpGrounds) {
            if (err) {
                req.flash("error", "Something went wrong.");
                console.log(err);
            } else {
                if (allCmpGrounds.length < 1) {
                    noMatch = 'No Campgrounds match that search, please search again.';
                    return res.render('campgrounds/results', { cmpGrounds: allCmpGrounds, noMatch: noMatch });
                } else {
                    res.render('campgrounds/results', { cmpGrounds: allCmpGrounds, noMatch: noMatch });
                };
            };
        });
    } else {
        req.flash('warning', 'No input, so here are all the campgrounds.');
        return res.redirect('/campgrounds');
    }
});

//DESTROY CAMPGROUND ROUTE
router.delete('/:id', middleware.checkOwnership, function (req, res) {
    CampGround.findByIdAndRemove(req.params.id, (err, campgroundRemoved) => {
        if (err) {
            console.log(err);
        }
        Comment.deleteMany({ _id: { $in: campgroundRemoved.comments } }, (err) => {
            if (err) {
                console.log(err);
            }
            req.flash("warning", "Campground Deleted.");
            res.redirect("/campgrounds");
        });
    });
});

//Avoids DDOS by securing query string
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;
