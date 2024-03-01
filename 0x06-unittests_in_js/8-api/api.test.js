// api.test.js
const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  let server;

  before(() => {
    server = require('./api');
  });

  after(() => {
    server.close();
  });

  it('should return correct status code', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should handle other routes', (done) => {
    request.get('http://localhost:7865/some/route', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
