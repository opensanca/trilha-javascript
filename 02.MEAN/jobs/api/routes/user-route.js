'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/user-controller')

router.get('/users', ctrl.getUsers);
router.post('/user', ctrl.saveUser);

module.exports = router;
