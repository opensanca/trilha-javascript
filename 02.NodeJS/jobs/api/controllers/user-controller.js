'use strict';

const User = require('../models/user-model');
const router = require('../router');

router.get('/users', (req, res) => {
  res.write(JSON.stringify(User.get()));
  res.end();
});
