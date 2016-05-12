/* eslint-env node */
/* eslint-disable new-cap */
/* global Feature, Before, After, Scenario */

Feature('Wine Search and Grading');

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

Scenario('Searching a wine and siplaying info', (I) => {
  I.see('Find a Wine');
  I.click('Find a Wine');
  I.see('Search for a Wine');
  I.fillField('.search', 'clos du romarin');
  I.dontSee('Clos du Romarin');
  I.pressKey('Enter');
  I.see('Clos du Romarin, Côtes du Roussillon');
  I.fillField('.search', 'Malijay');
  I.pressKey('Enter');
  I.see('Château de Malijay, Côtes-du-Rhône');
  I.click('Château de Malijay, Côtes-du-Rhône');
  I.seeElement('.wine-details');
  I.see('Chateau de Malijay', '.wine-details');
  I.see('AOP Côtes-du-Rhône');
  I.see('Grenache', '.wine-details');
  I.see('Syrah', '.wine-details');
  I.see('Mourvèdre', '.wine-details');
  I.seeElement('.wine-details .grades');
});
