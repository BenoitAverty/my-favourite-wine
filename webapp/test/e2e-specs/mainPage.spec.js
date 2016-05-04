/* eslint-env node,mocha */
/* global browser */
const expect = require('chai').expect;

// Runs the express server. It's closed at the end of the tests only. If experiencing
// flaky tests, try moving the require in a beforeEach method.
const server = require('../../server/index.js');

describe('Main Page', () => {
  it('should contain a "Hello, world!"" title', () => {
    browser.url('http://localhost:8080');
    browser.waitForExist('h2', 1000);
    expect(true);
  });

  after(() => {
    server.closeServer();
  });
});
