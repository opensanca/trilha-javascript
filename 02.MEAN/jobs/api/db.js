'use strict';

const mongoose = require('mongoose');
const env = require('./env')

mongoose.Promise = global.Promise;
mongoose.connect(env.database.uri, env.database.options);

const db = mongoose.connection;

db.on('open', () => {
  console.log(`Connected with: ${env.database.uri}`);
});

db.on('error', (err) => {
  console.log(`MongoDB error: ${err}`);
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('MongoDB disconnected through app termination');
    process.exit(0);
  });
});

module.exports = db;
