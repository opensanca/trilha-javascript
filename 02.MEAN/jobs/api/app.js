'use strict';

const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Config Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Config Routes
app.use(require('./routes/user-route'));
app.use(require('./routes/company-route'));

module.exports = app;
