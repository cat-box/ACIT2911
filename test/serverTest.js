const chai = require('chai');
const server = require('../server');
const chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

describe('Testing Page Render', function() {
    // Forum Home Page
    it('Forum test', function() {
        chai.request('http://localhost:8080/')
            .get('/')
            .end(function(err, res){
                res.body.should.be.a('object');
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                // done();
            });
    });
    // Login Page
    it('Login test', function() {
        chai.request('http://localhost:8080/login')
            .get('/login')
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                // done();
            });
    });
    // Logout Page
    it('Logout test', function() {
        chai.request('http://localhost:8080/logout')
            .get('/')
            .end(function(err, res){
                res.should.have.status(200);
                // done();
            });
    });
    // Registration Test
    it('Registration test', function() {
        chai.request('http://localhost:8080/registration')
            .get('/registration')
            .end(function(err, res){
                res.should.have.status(200);
                // done();
            });
    });
    // Search Test
    it('Search test', function() {
        chai.request('http://localhost:8080/search')
            .get('/search')
            .end(function(err, res){
                res.should.have.status(200);
                // done();
            });
    });
  });