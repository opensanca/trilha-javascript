'use strict';

const User = require('../models/user-model');
const ctrl = {};

ctrl.getUsers = (req, res) => {
  res.send(User.get(req.query.name));
};

ctrl.saveUser = (req, res) => {
  res.send('save');
};

module.exports = ctrl;
