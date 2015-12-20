var mongoose = require( 'mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://localhost/LocateR';
require('./locations');


mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
    console.log('Mongoose server connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

// Closing the connection on server shutdown or restart

gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function() {
        // Output message and callback when Mongoose connection is closed
        console.log('Mongoose disconnected through ' + msg);
        callback();
    })
};

// Listen for NODEMON termination
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// Application termination
process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});

// Heroku termination
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function() {
        process.exit(0);
    });
});


