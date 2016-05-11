/* eslint-env node */
/* eslint-disable new-cap */
/* global Feature, Before, After, Scenario */

Feature('App Skeleton');

const app = require('../../server/app');
const expressAppLauncher = require('../../server/express-app-launcher');
const { start: startApp, stop: stopApp } = expressAppLauncher(app);

Before((I) => {
  startApp();
  I.amOnPage('/');
});
After(() => {
  stopApp(true);
});

// Scenario('test something', (I) => {
// });
