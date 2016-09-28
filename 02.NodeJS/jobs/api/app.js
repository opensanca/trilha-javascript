'use strict';

require('./init-database');
const http = require('http');
const router = require('./router');

// Config Server
const server = http.createServer((req, res) => {
  router.processRequest(req, res);
});

// Config Controllers
require('./controllers/company-controller');
require('./controllers/user-controller');

// Bind Server
server.listen(3000, () => {
  console.log('Escutando na porta 3000');
});
