var request = require('supertest');
var expect = require('chai').expect;
var app = require('../server/server.js');
var agent = request.agent(app);

describe('server tests', function() {

  it('respond with static assets', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});