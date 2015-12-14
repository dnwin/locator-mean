/**
 * Created by Dennis on 12/13/2015.
 */
// Locations controller

/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', { title: 'Home' });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', { title: 'Location Info'});
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', { title: 'Add review'});
};
