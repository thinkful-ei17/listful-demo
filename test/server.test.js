'use strict';

const app = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiSpies = require('chai-spies');

chai.should();
chai.use(chaiHttp);
chai.use(chaiSpies);

describe('Basic Express Setup', function () {

  let server;
  before(function () {
    return app.listenAsync()
      .then(instance => server = instance); // set server instance
  });

  after(function () {
    return server.closeAsync();
  });

  it('GET request should return a page', function () {
    return chai.request(server).get('/')
      .then(function (res) {
        res.should.exist;
        res.should.be.a.status(200);
        res.should.be.html;
      });
  });
  describe('404 handler', function () {

    it('should respond with 404 when given a bad path', function () {
      const spy = chai.spy();
      return chai.request(server)
        .get('/bad/path')
        .then(spy)
        .then(() => {
          spy.should.not.have.been.called();
        })
        .catch(err => {
          err.response.should.have.status(404);
        });
    });

  });
});
