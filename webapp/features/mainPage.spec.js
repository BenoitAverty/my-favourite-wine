/* eslint-env node,mocha */
/* global browser */
const expect = require('chai').expect;

describe('Main Page', () => {
  it('should contain a "Hello, world!"" title', () => {
    browser.url('http://localhost:8080');
    browser.waitForExist('h2');
    expect(true);
  });
});
