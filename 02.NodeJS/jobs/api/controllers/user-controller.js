'use strict';

const User = require('../models/user-model');
const ctrl = {};

ctrl.getUsers = (req, res) => {
  User.get(req.query)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

ctrl.saveUser = (req, res) => {
  res.send('save');
};

module.exports = ctrl;
