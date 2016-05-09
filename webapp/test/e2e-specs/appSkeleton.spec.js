/* eslint-env node,mocha */
/* global browser */

const app = require('../../server/app');
const expressAppLauncher = require('../../server/express-app-launcher');

const { start: startApp, stop: stopApp } = expressAppLauncher(app);

describe('App Skeleton', () => {
  beforeEach(startApp);

  it('should contain a h1 title', () => {
    browser.url('http://localhost:8080');
    browser.waitForExist('h1');
  });

  it('should contain a h2 title', () => {
    browser.url('http://localhost:8080');
    browser.waitForExist('h2');
  });

  afterEach((done) => {
    stopApp(true, done);
  });
});
