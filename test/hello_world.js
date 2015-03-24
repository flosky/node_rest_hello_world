var request = require('supertest');
var assert = require('assert');
var app = require('../src/app');

describe('hello_world', function () {

    describe('GET', function () {
    
        it('should return Hello World!', function (done) {
            request(app)
                .get('/')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)    
                .end(function (error, response) {
                    assert.equal('OK', response.body.status);
                    assert.equal('Hello World!', response.body.msg);
                    done();
                });
        });
    
    });

});

