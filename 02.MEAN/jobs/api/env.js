'use strict'

const env = {}

env.server = {
  port: process.env.SERVER_PORT || 3000
}

env.database = {
  uri: process.env.DATABASE_URI || 'mongodb://ds139817.mlab.com:39817/opensanca-jobs',
  options: {
    user: process.env.DATABASE_USER || 'dev',
    pass: process.env.DATABASE_PASS || 'dev'
  }
}

module.exports = env
