/* eslint no-console: "off" */
const express = require('express');

let currentPort = 0;
let currentApp = null;
let server = null;

function enableDestroy(s) {
  const connections = {};

  s.on('connection', (conn) => {
    const key = `${conn.remoteAddress} : ${conn.remotePort}`;
    connections[key] = conn;
    conn.on('close', () => {
      delete connections[key];
    });
  });

  server.destroy = (cb) => {
    server.close(cb);
    for (const k of Object.keys(connections)) {
      connections[k].destroy();
    }
  };
}

module.exports = {
  start: (port = 8080) => {
    if (currentApp === null && server === null) {
      currentApp = express();

      currentApp.use(express.static('dist'));

      server = currentApp.listen(port);

      enableDestroy(server);

      currentPort = port;
      console.log(`App started on port ${port}`);
    } else {
      console.log('Server already started');
    }

    return currentApp;
  },
  stop: (destroy, done) => {
    if (server !== null) {
      const cb = () => {
        currentPort = 0;
        currentApp = null;
        server = null;
        console.log('Application stopped.');
        done();
      };

      if (destroy) {
        server.destroy(cb);
      } else {
        server.close(cb);
      }
    }
  },
  getPort: () => currentPort,
};
