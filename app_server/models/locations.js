/**
 * Created by Dennis on 12/19/2015.
 */
var mongoose = require('mongoose');

// Define the schema for locations

var locationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: String,
    rating: {type: Number, 'default': 0, min: 0, max: 5},
    facilities: [String]
});