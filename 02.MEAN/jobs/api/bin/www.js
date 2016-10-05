'use strict';

const app = require('../app')
const env = require('../env');

app.listen(env.server.port, () => {
  console.log(`listen on port ${env.server.port}`);
});
