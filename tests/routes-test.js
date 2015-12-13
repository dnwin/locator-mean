/**
 * Created by Dennis on 12/13/2015.
 */
var supertest = require("supertest");
var should = require("should");

var port = '3000';
var server = supertest.agent('http://localhost:' + port);

describe('homepage', function() {
    it('should respond to GET', function(done) {
        server
            .get('/')
            .expect(200)
            .end(function(err, res) {
                res.status.should.be.equal(200);
                done();
            });
    });
});


describe('location', function() {
    it('should respond to GET', function(done) {
        server
            .get('/location')
            .expect(200)
            .end(function(err, res) {
                res.status.should.be.equal(200);
                done();
            });
    });

    it('/location/about should respond to GET', function(done) {
        server
            .get('/location/review/new')
            .expect(200)
            .end(function(err, res) {
                res.status.should.be.equal(200);
                done();
            });
    });
});


describe('about', function() {
    it('should respond to GET', function(done) {
        server
            .get('/about')
            .expect(200)
            .end(function(err, res) {
                res.status.should.be.equal(200);
                done();
            });
    });
});