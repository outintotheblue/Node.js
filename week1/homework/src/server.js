'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */

function createServer(port) {
  let state = 10;

  const server = http.createServer((request, response) => {
    function writeLines() {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify({ state: state }));
    }

    switch (request.url) {
      case '/state':
        writeLines();
        break;
      case '/add':
        state += 1;
        writeLines();
        break;
      case '/subtract':
        state -= 1;
        writeLines();
        break;
      case '/reset':
        state = 10;
        writeLines();
        break;
      default:
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ error: 'Not found' }));
    }
    response.end();
  });

  return server;
}

module.exports = { createServer };
