/** eslint-env node */

// Allows a node http server to be destroyed and all its connections closed.
// Returns the function that destroys the server passed as a parameter.
function makeDestroy(s) {
  const connections = {};

  s.on('connection', (conn) => {
    const key = `${conn.remoteAddress} : ${conn.remotePort}`;
    connections[key] = conn;
    conn.on('close', () => {
      delete connections[key];
    });
  });

  return (callback) => {
    s.close(callback);
    for (const k of Object.keys(connections)) {
      connections[k].destroy();
    }
  };
}

let currentPort = 0;
let currentApp = null;
let server = null;

// Export Start / Stop methods.
module.exports = function makeExpressLauncher(app) {
  return {
    start: (port = 8080) => {
      if (currentApp === null && server === null) {
        currentApp = app;

        server = currentApp.listen(port);

        server.destroy = makeDestroy(server);

        currentPort = port;
        console.log(`Application started. Listening on port ${port}`);
      } else {
        console.log('Application already started');
      }

      return currentApp;
    },
    stop: (destroy, done) => {
      if (server !== null) {
        const callback = () => {
          currentPort = 0;
          currentApp = null;
          server = null;
          console.log('Application stopped.');
          done();
        };

        if (destroy) {
          server.destroy(callback);
        } else {
          server.close(callback);
        }
      }
    },
    getPort: () => currentPort,
  };
};
