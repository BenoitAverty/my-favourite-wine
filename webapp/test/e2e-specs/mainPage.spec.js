/* eslint-env node,mocha */
/* global browser */
// const expect = require('chai').expect;

// Runs the express server. It's closed at the end of the tests only. If experiencing
// flaky tests, try moving the require in a beforeEach method.
const { start, stop } = require('../../server/app');

describe('Main Page', () => {
  beforeEach(start);

  it('should contain a h1 title', () => {
    browser.url('http://localhost:8080');
    browser.waitForExist('h1');
  });

  it('should contain a h2 title', () => {
    browser.url('http://localhost:8080');
    browser.waitForExist('h2');
  });

  afterEach((done) => {
    stop(true, done);
  });
});
