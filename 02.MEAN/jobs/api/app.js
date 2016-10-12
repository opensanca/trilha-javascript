'use strict';

const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./middlewares/basic-auth-middleware');
const i18nMiddleware = require('./middlewares/i18n-middleware');
const app = express();

// Config Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(i18nMiddleware);
app.use(authMiddleware);

// Config Routes
app.use(require('./routes/user-route'));
app.use(require('./routes/company-route'));

module.exports = app;
