'use strict';

const env = {};

env.server = {
  port: process.env.SERVER_PORT || 3000
}

module.exports = env;
