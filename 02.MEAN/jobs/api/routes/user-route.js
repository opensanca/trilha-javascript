'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/user-controller')
const authMiddleware = require('../middlewares/basic-auth-middleware')

router.get('/users', ctrl.getUsers);
router.get('/user/profile', ctrl.getProfile);
router.get('/user/:id', ctrl.getUser);
router.post('/user', ctrl.saveUser);
router.put('/user/:id', ctrl.updateUser);
router.delete('/user/:id', ctrl.removeUser);

module.exports = router;
