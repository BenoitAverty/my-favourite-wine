/* eslint no-console: "off" */

const express = require('express');
const app = express();

app.use(express.static('dist'));

const server = app.listen(8080);
console.log('Listening to port 8080');

module.exports = {
  closeServer: () => {
    server.close();
  },
};
